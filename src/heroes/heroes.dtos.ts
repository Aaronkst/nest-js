import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateHeroDto {
  @IsNotEmpty()
  @ApiProperty({
    description: "Name of Hero",
    example: "Pendragon",
  })
  name: string;

  @ApiPropertyOptional({
    description: "Description of Hero",
    example: "King of Brittania",
  })
  description: string;
}

export class EditHeroDto {
  @IsNotEmpty()
  @ApiProperty({
    description: "Hero Id",
    example: "51a1dbfb-96cf-40f7-a21e-265658bf406f",
  })
  id: string;

  @ApiPropertyOptional({
    description: "Name of Hero",
    example: "Leoric",
  })
  name: string;

  @ApiPropertyOptional({
    description: "Description of Hero",
    example: "King of Wraith",
  })
  description: string;
}

export class DeleteHeroDto {
  @IsNotEmpty()
  @ApiProperty({
    description: "Hero Id",
    example: "51a1dbfb-96cf-40f7-a21e-265658bf406f",
  })
  id: string;
}
