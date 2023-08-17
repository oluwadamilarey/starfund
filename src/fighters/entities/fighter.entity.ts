import { Fight } from 'src/fights/entities/fight.entity';
import { Event } from 'src/events/entities/event.entity';
import { Ranking } from 'src/rankings/entities/ranking.entity';
import { PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column()
  weightClass: string;

  @Column()
  nationality: string;

  @Column()
  team: string;

  @OneToMany(() => Event, (event) => event.fighter1)
  eventsAsFighter1: Event[];

  @OneToMany(() => Event, (event) => event.fighter2)
  eventsAsFighter2: Event[];

  @OneToMany(() => Fight, (fight) => fight.fighter1)
  fightsAsFighter1: Fight[];

  @OneToMany(() => Fight, (fight) => fight.fighter2)
  fightsAsFighter2: Fight[];

  @OneToMany(() => Ranking, (ranking) => ranking.fighter)
  rankings: Ranking[];
}
