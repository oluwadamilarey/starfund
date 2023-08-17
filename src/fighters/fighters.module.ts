import { Module } from '@nestjs/common';
import { FightersService } from './fighters.service';
import { FightersController } from './fighters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from './entities/fighter.entity';
import { RankingsModule } from 'src/rankings/rankings.module';

@Module({
  imports: [TypeOrmModule.forFeature([Fighter]), RankingsModule],
  controllers: [FightersController],
  providers: [FightersService],
})
export class FightersModule {}
