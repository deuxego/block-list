import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CookieService } from './cookie.service';
import { Response } from 'express';
import { AuthGuard } from './guards/auth.guard';
import { SessionInfo } from './session-info.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly cookieService: CookieService,
  ) {}

  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(
    @Body() body: SignUpBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signUp(
      body.email,
      body.password,
    );
    this.cookieService.setToken(res, accessToken);
  }

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  async signIn(
    @Body() body: SignInBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signIn(
      body.email,
      body.password,
    );

    this.cookieService.setToken(res, accessToken);
  }

  @Post('sign-out')
  @ApiCreatedResponse()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  async signOut(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res);
  }

  @Get('session')
  @ApiOkResponse({ type: GetSessionInfoDto })
  @UseGuards(AuthGuard)
  async getSession(@SessionInfo() session: GetSessionInfoDto) {
    return session;
  }
}
