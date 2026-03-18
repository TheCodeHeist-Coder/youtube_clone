













import { useEffect, useState } from "react";
import axios from "axios";
import { AppBar } from "../components/AppBar";


type Video = {
    id: string;
    thumbnail: string;
    title: string;
    user: {
        profilePicture: string;
        channelName: string;
        viewCount: string;
    };
};

export function LandingPage() {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/videos")
            .then((response) => {
                setVideos(response.data);
            });
    }, []);

    return (
        <div className="bg-[#000000]">


            <AppBar />


            <div className="flex h-screen pt-16 overflow-hidden">


                <div className="fixed top-16 left-0 w-72 h-[calc(100vh-4rem)] overflow-y-auto bg-[#000000] border-r border-gray-700">
                    <div className="p-4 space-y-4">
                        <h1 className="text-lg font-bold">Sidebar</h1>

                        <div className="p-2 hover:bg-gray-800 rounded">

                        </div>

                    </div>
                </div>


                <div className="ml-72 flex-1 overflow-y-auto p-4">
                    <div className="grid grid-cols-3 gap-4">
                        {videos.map((video) => (
                            <VideoCard
                                key={video.id}
                                href={`/watch/?id=${video.id}`}
                                imageUrl={video.thumbnail}
                                title={video.title}
                                profilePicture={video.user.profilePicture}
                                channelName={video.user.channelName}
                                viewCount={video.user.viewCount}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}






interface VideoCard {
    imageUrl: string,
    profilePicture: string,
    title: string,
    channelName: string,
    viewCount: string
    href: string
}


function VideoCard({ imageUrl, profilePicture, title, channelName, viewCount, href }: VideoCard) {

    return (

        <div className="w-131 h-106 rounded-2xl mb-5 py-3 hover:bg-[#2b2b2b] transition-all duration-300 ease-in-out px-3 cursor-pointer" onClick={() => window.location = href} >

            <div className="img overflow-hidden">
                <img className="w-full h-72  transition-all duration-300 rounded-xl" src={imageUrl} alt="" />
            </div>

            <div className="titleANDprofile flex gap-4 mt-3 px-2 items-center font-title">
                <div className="profilePicture w-10 h-10 shrink-0 border  rounded-full overflow-hidden flex justify-center items-center">
                    <img className="w-full h-full object-cover" src={profilePicture} alt="" />
                </div>

                <div className="title text-[#F1F1F1] font-medium text-[17px] contrast-92 leading-5.5">
                    <h3>{title}</h3>

                </div>
            </div>

            <div className="channelName ml-16 mt-0.5">
                <p className="text-[#AAAAAA] contrast-more: font-medium   text-[15px]"> {channelName} </p>
            </div>

            <div className="viewsANDtime text-[#AAAAAA] text-[14px] ml-16 font-medium">
                <div className="views">
                    {viewCount} views •<span> 3 months ago </span>
                </div>


            </div>

        </div>

    )
}

