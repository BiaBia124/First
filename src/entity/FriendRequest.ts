import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany,JoinTable, JoinColumn} from "typeorm"
import { User } from "./User"

@Entity("friend_requests")
export class FriendRequest extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user_id: number

  @Column()
  send_by: number

  //user_id (from User table (one to many))
//request_user_id (from User Table (many to many))

 @ManyToOne(() => User, (user) => user.friendrequest)
 @JoinColumn({name:"userid"})  
 user: User;
static user: any


@ManyToMany(() => User, (users) => users.friendRequest, {
  cascade: true
})
@JoinTable()
users: User[]




}
