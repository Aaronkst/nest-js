import { Injectable } from "@nestjs/common";
import { IHello } from "./lib/types/common";

@Injectable()
export class AppService {
  getHello(): IHello {
    const data: IHello = {
      data: "Hello World",
    };
    return data;
  }
}
