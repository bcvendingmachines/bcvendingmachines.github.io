export class User {
  id!: number | PropertyKey
  username: string | undefined
  password: string | undefined
  token?: string | undefined
  contributions!: number
  display_name: string | undefined
}
