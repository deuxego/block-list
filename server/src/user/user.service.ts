import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { BlockListService } from 'src/block-list/block-list.service';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {
  constructor(
    private readonly db: DbService,
    private readonly accountService: AccountService,
    private readonly blockListService: BlockListService,
  ) {}

  async findByEmail(email: string) {
    return await this.db.user.findFirst({ where: { email } });
  }

  async create(email: string, hash: string, salt: string) {
    const user = await this.db.user.create({ data: { email, hash, salt } });

    await this.accountService.create(user.id);
    await this.blockListService.create(user.id);

    return user;
  }
}
