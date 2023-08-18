import { Controller, Post, Body, Param, Get, Patch } from '@nestjs/common';
import { FightsService } from './fights.service';
import { Fight } from './entities/fight.entity';
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightDto } from './dto/update-fight.dto';

@Controller('fights')
export class FightsController {
  constructor(private readonly fightsService: FightsService) {}

  @Post()
  async createFight(@Body() createFightDto: CreateFightDto): Promise<Fight> {
    return this.fightsService.createFight(createFightDto);
  }

  @Get(':id')
  async findFightById(@Param('id') id: number): Promise<Fight> {
    return this.fightsService.findFightById(id);
  }

  @Patch(':id')
  async updateFight(
    @Param('id') id: number,
    @Body() updateFightDto: UpdateFightDto,
  ): Promise<Fight> {
    return this.fightsService.updateFight(id, updateFightDto);
  }
  //TODO
  // Implement other controller methods
}
