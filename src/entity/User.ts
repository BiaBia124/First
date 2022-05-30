import { Entity, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, ManyToMany, JoinTable} from "typeorm"
import { collapseTextChangeRangesAcrossMultipleVersions, ImportsNotUsedAsValues } from "typescript"
import { Friend } from '../entity/Friend'
//import { Comment } from "./Comments"
import { Post } from "./Posts"
import { FriendRequest } from "./FriendRequest"

@Entity('User')
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userName: string


  @Column()
  age: number

  @Column()
  requestSentBy: Number

  @Column({nullable: true,
  unique: true})
  email: string

  @Column({nullable: true})
  password: string

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column ()
  @UpdateDateColumn ()
  updateAt: Date

  @BeforeInsert()
  @BeforeUpdate()
 

  @OneToMany(() => Friend, (friend) => friend.user)
  friends: Friend[]

  @OneToMany(() => Post, (post) => post.user)
  post: Post[];


  @OneToMany(() =>  FriendRequest, (friendrequest) => friendrequest.user_id, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  friendrequest: FriendRequest[]

   @ManyToMany(() => FriendRequest, (frienRequest) => FriendRequest.user)
   friendRequest: FriendRequest[];
  
}
