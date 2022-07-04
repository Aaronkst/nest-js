import { Injectable } from '@nestjs/common';
import { ISuccess, IError } from './interface/app.interface';

@Injectable()
export class AppService {
  getHello(): ISuccess | IError {
    const data: ISuccess = {
      status: 'success',
      data: 'Hello World',
      timestamp: new Date().getTime(),
    };
    return data;
  }
}
