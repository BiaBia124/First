import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, BaseEntity } from "typeorm"
import { User } from "./User"

@Entity("friends")
export class Friend extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user_id: number


  @Column()
  friend_id: number

  @ManyToOne(() => User, (user) => user.friends)
  user: User
}
