import express from 'express'
import { prisma } from './db';

const app = express();



// get videos
app.get("/api/v1/videos", async(req, res) => {

    const videos = await prisma.uploads.findMany({
        include: {user: {select: {id: true, channelName: true, profilePicture: true}}},
        orderBy: {createdAt: "desc"}
    });

    return res.json(videos)

})


// get a specific video
app.get("api/v1/videos/:id", async(req, res) => {
    const video = await prisma.uploads.findUnique({
        where: {id: req.params.id},
        include: {user: {select: {id: true, channelName: true, profilePicture: true, subscriberCount: true}}}

    })

    if(!video) {
        return res.status(404).json({
            error: "Oops, video not found"
        })
    }

    res.json(video)
})


// to upload videos
app.post("/api/v1/videos/:id", async(req , res) => {
    const userId = getUserId(req);
    if(!userId){
       return res.json({
            error: "Unauthorized"
        })
    }

    const video = await prisma.uploads.create({
        data: {...parsedData, userId}
    })

    res.status(201).json(video)

})


app.listen(4000, () => {
    console.log("Srvr is running...")
})
