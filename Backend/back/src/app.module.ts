import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [ProductsModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 