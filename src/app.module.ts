import { Module } from '@nestjs/common';
import { AppController, PostController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, PostController],
  providers: [AppService],
})
export class AppModule {}
