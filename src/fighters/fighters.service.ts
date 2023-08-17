import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { Fighter } from './entities/fighter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Ranking } from 'src/rankings/entities/ranking.entity';
import { Repository } from 'typeorm';
import { CreateFighterDto } from './dto/create-fighter.dto';

@Injectable()
export class FightersService {
  constructor(
    @InjectRepository(Fighter)
    private readonly fighterRepository: Repository<Fighter>,
  ) // @InjectRepository(Ranking)
  // private readonly rankingRepository: Repository<Ranking>,
  {}

  async create(createFighterDto: CreateFighterDto): Promise<Fighter> {
    const { name } = createFighterDto;

    const existingFighter = await this.fighterRepository.findOne({
      where: { name },
    });
    if (existingFighter) {
      throw new ConflictException(`Fighter with name '${name}' already exists`);
    }

    const newFighter = this.fighterRepository.create(createFighterDto);
    return this.fighterRepository.save(newFighter);
  }

  async findAll(): Promise<Fighter[]> {
    return this.fighterRepository.find();
  }

  async findOne(id: number): Promise<Fighter> {
    const fighter = await this.fighterRepository.findOne({ where: { id } });
    if (!fighter) {
      throw new NotFoundException(`Fighter with id ${id} not found`);
    }
    return fighter;
  }

  async update(id: number, updateFighterDto: UpdateFighterDto) {
    const fighter = await this.fighterRepository.findOne({ where: { id } });
    if (!fighter) {
      throw new NotFoundException(`Fighter with id ${id} not found`);
    }
    return this.fighterRepository.update(fighter, updateFighterDto);
  }

  async remove(id: number): Promise<void> {
    const fighter = await this.fighterRepository.findOne({ where: { id } });
    if (!fighter) {
      throw new NotFoundException(`Fighter with id ${id} not found`);
    }

    await this.fighterRepository.remove(fighter);
  }
}
