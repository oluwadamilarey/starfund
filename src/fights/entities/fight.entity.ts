import { Fighter } from 'src/fighters/entities/fighter.entity';
import { Event } from 'src/events/entities/event.entity';
import { PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export class Fight {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, (event) => event.fights)
  event: Event;

  @ManyToOne(() => Fighter, (fighter) => fighter.fightsAsFighter1)
  fighter1: Fighter;

  @ManyToOne(() => Fighter, (fighter) => fighter.fightsAsFighter2)
  fighter2: Fighter;

  @ManyToOne(() => Fighter, (fighter) => fighter.rankings)
  winner: Fighter;
}
