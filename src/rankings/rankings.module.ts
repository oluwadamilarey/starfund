import { Module, forwardRef } from '@nestjs/common';
import { RankingsService } from './rankings.service';
import { RankingsController } from './rankings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from 'src/events/events.module';
import { FightsModule } from 'src/fights/fights.module';
import { Fighter } from 'src/fighters/entities/fighter.entity';
import { Ranking } from './entities/ranking.entity';
import { Fight } from 'src/fights/entities/fight.entity';
import { Event } from 'src/events/entities/event.entity';
import { FightersModule } from 'src/fighters/fighters.module';
import { FightersService } from 'src/fighters/fighters.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fighter, Fight, Event, Ranking]),
    EventsModule,
    FightsModule,
    forwardRef(() => FightersModule),
  ],
  controllers: [RankingsController],
  providers: [RankingsService, FightersService],
})
export class RankingsModule {}
