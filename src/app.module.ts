import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ProductsModule,
    MongooseModule.forRoot(process.env.DB_URI)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
