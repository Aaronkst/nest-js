import {
  Controller,
  Body,
  //Get,
  Post,
  HttpException,
  HttpStatus,
  //Param,
  //UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { ISuccessResponse } from "../lib/types/common";
import { CreateUserDto } from "./users.dtos";
//import { ApiParam } from "@nestjs/swagger";

@Controller("api/users")
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Post("/register")
  async registerUser(
    @Body() payload: CreateUserDto,
  ): Promise<ISuccessResponse> {
    try {
      return {
        status: "success",
        data: await this.users.registerUser({
          ...payload,
        }),
        timestamp: new Date().getTime(),
      };
    } catch (e) {
      throw new HttpException(
        "Internal Server Error",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
