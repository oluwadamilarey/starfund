import { IsNotEmpty, IsNumber } from '@nestjs/class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsNumber()
  event: number;

  @IsNotEmpty()
  @IsNumber()
  fighter1: number;

  @IsNotEmpty()
  @IsNumber()
  fighter2: number;

  @IsNotEmpty()
  @IsNumber()
  winner: number;
}
