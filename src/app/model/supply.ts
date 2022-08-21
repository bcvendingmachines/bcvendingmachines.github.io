import { Machine } from "./machine"

export class Supply {
  id!: number
  machine!: Machine
  coffee!: boolean
  short_supply!: boolean
  time_checked!: Date
  checked_by!: string
  token?: string
}
