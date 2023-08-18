import { Module, forwardRef } from '@nestjs/common';
import { FightersService } from './fighters.service';
import { FightersController } from './fighters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from './entities/fighter.entity';
import { RankingsModule } from 'src/rankings/rankings.module';
import { Ranking } from 'src/rankings/entities/ranking.entity';
import { Fight } from 'src/fights/entities/fight.entity';
import { EventsModule } from 'src/events/events.module';
import { FightsModule } from 'src/fights/fights.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fight, Event, Fighter, Ranking]),
    forwardRef(() => RankingsModule),
    EventsModule,
    FightsModule,
  ],
  controllers: [FightersController],
  providers: [FightersService],
})
export class FightersModule {}
