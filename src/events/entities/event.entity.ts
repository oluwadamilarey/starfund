import { Fighter } from 'src/fighters/entities/fighter.entity';
import { Fight } from 'src/fights/entities/fight.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
} from 'typeorm';

export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  date: Date;

  @OneToMany(() => Fight, (fight) => fight.event)
  fights: Fight[];

  @ManyToMany(() => Fighter, (fighter) => fighter.eventsAsFighter1)
  fighter1: Fighter[];

  @ManyToMany(() => Fighter, (fighter) => fighter.eventsAsFighter2)
  fighter2: Fighter[];
}
