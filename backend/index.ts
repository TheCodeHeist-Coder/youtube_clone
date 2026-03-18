import express from 'express'
import { prisma } from './db';
import authRoutes from "./routes/authroutes"
import videosRoutes from "./routes/videosRoutes"
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());


app.use("/api/v1/auth/", authRoutes)

app.use("/api/v1/", videosRoutes)









app.listen(4000, () => {
    console.log("Srvr is running...")
})
