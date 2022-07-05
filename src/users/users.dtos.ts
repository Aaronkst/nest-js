import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({
    description: "Name of User",
    example: "John Doe",
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: "Password of User",
    example: "replaceme",
  })
  password: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: "Email of User",
    example: "john.doe@example.com",
  })
  email: string;
}
