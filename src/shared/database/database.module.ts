import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from '../../modules/users/users.repository';
import { CategoriesRepository } from '../../modules/categories/categories.repository';
import { TransactionsRepository } from '../../modules/transactions/transactions.repository';
import { WalletsRepository } from '../../modules/wallets/wallets.repository';

@Global()
@Module({
    providers: [
        PrismaService,
        UsersRepository,
        CategoriesRepository,
        WalletsRepository,
        TransactionsRepository,
    ],
    exports: [
        UsersRepository,
        CategoriesRepository,
        WalletsRepository,
        TransactionsRepository,
    ],
})
export class DatabaseModule {}