


export function LandingPage(){

  
    return (
      <div className="flex min-h-screen gap-1 bg-[#000000]">

         {/* sidebar */}
         <div className="sidebar fixed top-0 left-0 w-72 bg-black border border-r-white h-screen">
         <h1> This is sidebar </h1>
         </div>
      
     
        <div className="ml-72 min-h-screen  grid grid-cols-3  p-3">
        
        

        </div>

         </div>
    )
}






interface VideoCard {
    imageUrl: string,
    profilePicture: string,
    title: string,
    channelName: string,
    viewCount: string
}


 function VideoCard({imageUrl, profilePicture, title, channelName, viewCount }: VideoCard) {

    return (

        <div className="w-131  rounded-2xl py-5 hover:bg-[#2b2b2b] transition-all duration-300 ease-in-out px-3 cursor-pointer" >

            <div className="img overflow-hidden">
                <img className="w-full  transition-all duration-300 rounded-xl" src={imageUrl} alt="" />
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