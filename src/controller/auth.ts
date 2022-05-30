import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import * as bcrypt from "bcrypt"
/*
export class UserController {
    
    private userRepository = AppDataSource.getRepository(User)



    async createUser(req: Request, res: Response, next: NextFunction) {
            const {eamil, password} = req.body
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            const emailLowerCase = await req.body.email.toLowerCase();
            //create new user
            const newUser = new User
                email: req.body.emailLowerCase,
                password: hashedPassword,
            });
            await User.save;
            return true;
    
            //save user and respond
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    });



*/
