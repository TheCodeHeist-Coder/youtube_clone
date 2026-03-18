export function AppBar() {
    return (
        <div className="fixed top-0 left-0 w-full h-16 bg-[#00000]/60 flex items-center justify-between px-28 z-50">


            <div className="text-2xl tracking-tighter font-semibold text-gray-200">YouTube</div>


            <div className="flex-1 max-w-xl mx-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 px-4 text-gray-100 outline-none  rounded-full bg-gray-800/50 border border-gray-700"
                />
            </div>


            <div>
                <button className="bg-gray-900 text-[#ffffff] font-semibold rounded-full px-8 py-2.5  hover:bg-gray-700">
                    Upload
                </button>
            </div>

        </div>
    );
}