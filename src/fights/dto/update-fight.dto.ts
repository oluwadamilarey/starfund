import { PartialType } from '@nestjs/mapped-types';
import { CreateFightDto } from './create-fight.dto';

export class UpdateFightDto {
  fight: CreateFightDto;
}
