import { type Request, type Response, type NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { prisma } from "../db";


export const authenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const authHeader = req.headers["authorization"] || "";

        console.log("authHeader is: ", authHeader)


        if (!authHeader) return res.status(404).json({ error: 'You are not authorized' })

        const token = authHeader.split(' ')[1];
        console.log("Token is: ", token)
        if (!token) return res.status(404).json({ error: 'You are not authorized' })


        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };

        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true }
        })

        if (!user) {
            return res.status(404).json({
                error: "Unauthorized user"
            })
        }

        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({ message: "You are not authorized..." });

    }
}