import { Module } from '@nestjs/common';
import { FightsService } from './fights.service';
import { FightsController } from './fights.controller';
import { RankingsModule } from 'src/rankings/rankings.module';
import { Fighter } from 'src/fighters/entities/fighter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [FightsController],
  providers: [FightsService],
})
export class FightsModule {}
