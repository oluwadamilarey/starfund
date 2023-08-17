import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class CreateFighterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  weightClass: string;

  @IsNotEmpty()
  @IsString()
  nationality: string;

  @IsNotEmpty()
  @IsString()
  team: string;

  // Other properties...
}
