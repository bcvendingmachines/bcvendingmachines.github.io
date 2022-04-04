import { Machine } from "./machine";
export class Supply {
  id!: Number;
  machine!: Machine;
  coffee!: boolean;
  short_supply!: boolean;
  time_checked!: Date;
  checked_by!: string;
}
