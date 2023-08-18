import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightDto } from './dto/update-fight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Fight } from './entities/fight.entity';

@Injectable()
export class FightsService {
  constructor(
    @InjectRepository(Fight)
    private readonly fightRepository: Repository<Fight>,
  ) {}

  async createFight(createFightDto: CreateFightDto): Promise<Fight> {
    const { event, fighter1, fighter2, winner } = createFightDto;

    const fightData: DeepPartial<Fight> = {
      event: { id: event },
      fighter1: { id: fighter1 },
      fighter2: { id: fighter2 },
      winner: { id: winner },
    };

    const newFight = this.fightRepository.create(fightData);
    return this.fightRepository.save(newFight);
  }

  async findFightById(id: number): Promise<Fight> {
    const fight = await this.fightRepository.findOne({ where: { id } });
    if (!fight) {
      throw new NotFoundException(`Fight with id ${id} not found`);
    }
    return fight;
  }

  async updateFight(
    id: number,
    updateFightDto: UpdateFightDto,
  ): Promise<Fight> {
    const { event, fighter1, fighter2, winner } = updateFightDto;

    const fightToUpdate = await this.fightRepository.findOne({ where: { id } });
    if (!fightToUpdate) {
      throw new NotFoundException(`Fight with id ${id} not found`);
    }

    return this.fightRepository.save(fightToUpdate);
  }
}
