import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Power } from './power.entity';
import { Location } from './location.entity';

@Entity()
export class PowerData {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Power, (power) => power.id)
  power: number;

  @Column()
  registry: Date;

  @Column()
  key: string;

  @Column()
  value: string;

  @ManyToOne(() => Location, (location) => location.id)
  location: Location;
}
