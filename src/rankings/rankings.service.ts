import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ranking } from './entities/ranking.entity';

@Injectable()
export class RankingsService {
  constructor(
    @InjectRepository(Ranking)
    private rankingRepository: Repository<Ranking>,
  ) {}

  async createRanking(createRankingDto: CreateRankingDto): Promise<Ranking> {
    const newRanking = this.rankingRepository.create(createRankingDto);
    return this.rankingRepository.save(newRanking);
  }

  async getRankingById(id: number): Promise<Ranking> {
    const ranking = await this.rankingRepository.findOne({ where: { id } });
    if (!ranking) {
      throw new NotFoundException(`Ranking with id ${id} not found`);
    }
    return ranking;
  }

  async getAllRankings(): Promise<Ranking[]> {
    return this.rankingRepository.find();
  }

  async updateRanking(
    id: number,
    updateRankingDto: CreateRankingDto,
  ): Promise<Ranking> {
    const rankingToUpdate = await this.rankingRepository.findOne({
      where: { id },
    });
    if (!rankingToUpdate) {
      throw new NotFoundException(`Ranking with id ${id} not found`);
    }
    Object.assign(rankingToUpdate, updateRankingDto);
    return this.rankingRepository.save(rankingToUpdate);
  }

  async deleteRanking(id: number): Promise<void> {
    const ranking = await this.rankingRepository.findOne({ where: { id } });
    if (!ranking) {
      throw new NotFoundException(`Ranking with id ${id} not found`);
    }
    await this.rankingRepository.remove(ranking);
  }
}
