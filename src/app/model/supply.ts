import { Machine } from "./machine"
import {User} from "./user";

export class Supply {
  id!: number
  machine!: Machine
  coffee!: boolean
  short_supply!: boolean
  time_checked!: Date
  checked_by!: string
  token?: string
  user_id!: User
}
