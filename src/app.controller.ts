import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ISuccess, IError } from './interface/app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res): ISuccess | IError {
    return res.send(this.appService.getHello());
  }
}

@Controller('post')
export class PostController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Res() res): ISuccess | IError {
    return res.send(this.appService.getHello());
  }
}
