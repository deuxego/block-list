import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, PatchAccountDto } from './dto';
import { AccountService } from './account.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  @ApiOkResponse({ type: AccountDto })
  async getAccount(
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<AccountDto> {
    return await this.accountService.getAccount(session.id);
  }

  @Patch()
  @ApiOkResponse({ type: AccountDto })
  async patchAccount(
    @Body() body: PatchAccountDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<AccountDto> {
    return await this.accountService.patchAccount(session.id, body);
  }
}
