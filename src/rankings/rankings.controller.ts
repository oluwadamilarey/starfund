import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RankingsService } from './rankings.service';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { Ranking } from './entities/ranking.entity';

@Controller('rankings')
export class RankingsController {
  constructor(private readonly rankingsService: RankingsService) {}

  @Post()
  async createRanking(
    @Body() createRankingDto: CreateRankingDto,
  ): Promise<Ranking> {
    return this.rankingsService.createRanking(createRankingDto);
  }

  @Get()
  async getAllRankings(): Promise<Ranking[]> {
    return this.rankingsService.getAllRankings();
  }

  @Get(':id')
  async getRankingById(@Param('id') id: number): Promise<Ranking> {
    return this.rankingsService.getRankingById(id);
  }

  @Put(':id')
  async updateRanking(
    @Param('id') id: number,
    @Body() updateRankingDto: CreateRankingDto,
  ): Promise<Ranking> {
    return this.rankingsService.updateRanking(id, updateRankingDto);
  }

  @Delete(':id')
  async deleteRanking(@Param('id') id: number): Promise<void> {
    return this.rankingsService.deleteRanking(id);
  }
}
