import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
    adapter,
});


async function main() {
    // Create multiple users
    await prisma.uploads.createMany({
        data: [
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcaADr4Wl1ZSt_7LdFtS2pgWBvTbsC-QHEg&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpp-Wv0DY91ghof8zFck10yk1_Td61LBEA9w&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNd32RnWlg16ViTfyE_yhFQPmjo15IxJ7ZA&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWF9eDWqBoIE05Hr4s3fKmGezU1MMP-uCbow&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcaADr4Wl1ZSt_7LdFtS2pgWBvTbsC-QHEg&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpp-Wv0DY91ghof8zFck10yk1_Td61LBEA9w&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNd32RnWlg16ViTfyE_yhFQPmjo15IxJ7ZA&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWF9eDWqBoIE05Hr4s3fKmGezU1MMP-uCbow&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcaADr4Wl1ZSt_7LdFtS2pgWBvTbsC-QHEg&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzm3eaTBTMylxzdX696rXMEih8bBlL_OvAuw&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpp-Wv0DY91ghof8zFck10yk1_Td61LBEA9w&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcaADr4Wl1ZSt_7LdFtS2pgWBvTbsC-QHEg&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWF9eDWqBoIE05Hr4s3fKmGezU1MMP-uCbow&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNd32RnWlg16ViTfyE_yhFQPmjo15IxJ7ZA&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzm3eaTBTMylxzdX696rXMEih8bBlL_OvAuw&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWF9eDWqBoIE05Hr4s3fKmGezU1MMP-uCbow&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcaADr4Wl1ZSt_7LdFtS2pgWBvTbsC-QHEg&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpp-Wv0DY91ghof8zFck10yk1_Td61LBEA9w&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNd32RnWlg16ViTfyE_yhFQPmjo15IxJ7ZA&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
            { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",title: "How to rich in 2026 and how to survive in this era of Ai. Let's see it", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWF9eDWqBoIE05Hr4s3fKmGezU1MMP-uCbow&s", userId: "efe0d60b-12c5-4887-a6fd-49facc34c339" },
        ],
        skipDuplicates: true, // prevents errors if you run the seed multiple times
    });

    console.log("Seed data inserted!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });