import { Router,type Request,type Response } from "express";
import { prisma } from "../db";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const router = Router();

router.post("/signup", async(req:Request, res:Response) => {

    try {
        

    const {username, password, gender} = req.body as {username: string, password: string, gender: any}

    if(!username || !password || !gender){
        return res.status(400).json({error: "All fields are required"})
    }

    const isUserExisted = await prisma.user.findFirst({
        where: {username: username}
    })

    if(isUserExisted){
        return res.status(400).json({
            error: "Username already exists. Try another userName"
        })
    }
     
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            username,
            password: hashedPassword,
            gender,
            channelName: username
        }
    })

    res.status(201).json({
        message: "You're signedup successfully..."
    })

        } catch (error) {
        console.log("error during signUp: ", error)
        return res.status(500).json({
            error: "Internal server error"
        })
    }

})



router.post("/login", async(req:Request, res:Response) => {
    try {
        const {username, password} = req.body as {
            username: string,
            password: string
        }

        if(!username || !password){
            return res.status(400).json({error: "All fields are required"})
        }


        const user = await prisma.user.findFirst({
            where: {username: username}
        })

        if(!user){
            return res.status(400).json({errro: "User doesn't exits.."})
        }


        const isPasswordMatched = bcrypt.compare(password, user.password);

        if(!isPasswordMatched){
              return res.status(400).json({errro: "User doesn't exits.."})
        }

        const token = await jwt.sign({
            id: user.id
        },  process.env.JWT_SECRET as string, {expiresIn: "27d"}
        
       )

       return res.status(200).json({
        token, 
        user: {
            id: user.id,
            username: user.username,
            gender: user.gender,
            channelName: user.channelName
        }
       })

    } catch (error) {
         console.log("error during login: ", error)
         return res.status(500).json({
            error: "Internal server error"
        })
    }
})


export default router;