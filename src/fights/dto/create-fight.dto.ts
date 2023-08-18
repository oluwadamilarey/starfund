import { IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';

export class CreateFightDto {
  @IsNotEmpty()
  @IsNumber()
  event: number;

  @IsNumber()
  fighter1: number;

  @IsNumber()
  fighter2: number;

  @IsNumber()
  winner: number;

  @IsNumber()
  rounds: number;

  @IsString()
  result: string;

  @IsString()
  knockoutTime: string;

  @IsString()
  submissionTime: string;
}
