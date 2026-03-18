import { Router, type Request, type Response } from "express";
import { prisma } from "../db";
import { authenticated } from "../middleware/authMiddleware";


const router = Router();


router.get("/videos", async (req: Request, res: Response) => {
    try {

        const videos = await prisma.uploads.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        channelName: true,
                        profilePicture: true

                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        })


        if(videos.length == 0){
            return res.status(404).json({
                error: "No video found"
            })
        }

        return res.json(videos);


    } catch (error) {
        console.log("Error while loading videos", error)
        return res.status(500).json({
            error: "Internal Server error"
        })
    }
})




// to get a particular video
router.get("/videos/:id", async(req:Request, res:Response) => {
    try {
        const {id} = req.params;
        const video = await prisma.uploads.findUnique({
            where: {id: id as string},
            include: {user: {select: {id: true, channelName: true, profilePicture: true, subscriberCount: true}}}
        })

        if(!video){
            return res.status(404).json({
                error: "Video not found..."
            })
        }

        return res.json(video)
    } catch (error) {
         console.log("Error while opening video", error)
        return res.status(500).json({
            error: "Internal Server error"
        })
    }
})



// to upload the video
router.post("/videos", authenticated, async(req:Request, res:Response) => {
    try {
        const {videoUrl, thumbnail, title} = req.body as {videoUrl: string, thumbnail: string, title: string}    
       const userId = req.user.id;
       

        if(!userId){
            return res.json(404).json({
                error: "User not found"
            })
        }


        const video = await prisma.uploads.create({
            data: {
                videoUrl,
                thumbnail,
                userId,
                title
            }
        });

        return res.json(201).json({
            message: "Video uplaoded successfully",
            video: video
        })
        

    } catch (error) {
        
    }
})





export default router;