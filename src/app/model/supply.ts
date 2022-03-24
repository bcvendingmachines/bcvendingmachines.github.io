import { Machine } from "./machine";
export class Supply {
  id!: Number;
  machine!: Machine;
  time_checked!: Date;
  has_coffee!: boolean;
  has_short_supply!: boolean;
  user!: string;
}
