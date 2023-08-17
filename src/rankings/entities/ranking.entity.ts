import { Fighter } from 'src/fighters/entities/fighter.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Ranking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  playerName: string;

  @Column({ type: 'integer' })
  score: number;

  @ManyToOne(() => Fighter, (fighter) => fighter.rankings)
  fighter: Fighter;

  constructor(playerName: string, score: number, fighter: Fighter) {
    this.playerName = playerName;
    this.score = score;
    this.fighter = fighter;
  }
}
