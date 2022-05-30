import { AppDataSource } from "../data-source"
import { NextFunction, Request, response, Response } from "express"
import { User } from "../entity/User"
import { Friend } from "../entity/Friend"
import * as bcrypt from "bcrypt"

export class UserController {

  private userRepository = AppDataSource.getRepository(User)
  private friendsRepository = AppDataSource.getRepository(Friend)

  
  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find()
  }
/*

  async SignIn(req: Request, res: Response, next: NextFunction) {
    let { firstname, lastname, email, password } = req.body;
    let user = new User();
    user.firstName = firstname;
    user.lastName = lastname;
    user.email = email;
    user.password = password;
    await user.save();
    return res.json(user)
    return this.userRepository.save(req.body)
  } */
 /* 
    async all(request: Request, response: Response, next: NextFunction) {
    const data = await this.y.find()
    console.log({data})
    return this.userRepository.find()
 
   
  } 

  
   async create(request: Request, response: Response, next: NextFunction) {
    const {eamil, password} = request.body
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(request.body.password, salt)
    const emailLowerCase = await request.body.email.toLowerCase()
    //create new user
    const newUser = User.create 
        email: eamil
        password: request.body.hashedPassword
        return this.userRepository.save(request.body)
    }
    */


  /*
  
  async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne(request.params.id)
  }
   
  async save(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.save(request.body)
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOneBy({id: parseInt(request.params.id) })
    await this.userRepository.remove(userToRemove)
  }
   //or
    async remove(request: Request, response: Response, next: NextFunction) {
        await this.userRepository.createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", request.params.id)
        .execute()

        return response(['success, :id is deleted. ',request.params.id])
    }

  async friend(request: Request, response: Response, next: NextFunction) {
    console.log("called")
    // let friends = await this.friendsRepository.find();

    // return friends
    
  }

*/
}