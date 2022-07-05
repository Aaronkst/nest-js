import { Injectable } from "@nestjs/common";
import { IHello } from "./app.interface";

@Injectable()
export class AppService {
  getHello(): IHello {
    const data: IHello = {
      data: "Hello World",
    };
    return data;
  }
}
