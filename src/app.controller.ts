import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { IHello } from "./interface/app.interface";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IHello {
    return this.appService.getHello();
  }
}
