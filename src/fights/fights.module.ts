import { Module, forwardRef } from '@nestjs/common';
import { FightsService } from './fights.service';
import { FightsController } from './fights.controller';
import { RankingsModule } from 'src/rankings/rankings.module';
import { Fighter } from 'src/fighters/entities/fighter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from 'src/events/events.module';
import { Ranking } from 'src/rankings/entities/ranking.entity';
import { Fight } from './entities/fight.entity';
import { FightersModule } from 'src/fighters/fighters.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fight, Ranking, Event, Fighter]),
    //RankingsModule,
    EventsModule,
    forwardRef(() => FightersModule),
  ],
  controllers: [FightsController],
  providers: [FightsService],
})
export class FightsModule {}
