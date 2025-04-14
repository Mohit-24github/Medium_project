
export const BlogsSkeleton = ()=>{
    return <div className="py-5 max-w-screen-xl">
        <div className="max-w-sm animate-pulse">
            <div className="border-b-1 border-slate-300 pb-3 p-4 min-w-md max-w-screen-xl cursor-pointer">
                <div className="flex">
                    <div className="flex justify-center pr-2">
                        <div className="flex justify-center flex-col h-4 w-4 bg-gray-200 rounded-full my-2 mx-1"></div>
                        <div className="flex justify-center flex-col h-4 bg-gray-200 rounded-full w-48 my-2 mx-1"></div> 
                        <div className="flex justify-center flex-col text-xs text-gray-200 my-2 mx-1"> &#9679; </div>
                        <div className="flex justify-center flex-col h-4 bg-gray-200 rounded-full w-48 my-2 mx-1"></div>
                    </div>
                </div>
                <div className="">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] my-2 mx-1"></div>
                    <div className="h-2 bg-gray-200 rounded-full my-2 mx-1"></div> 
                    <div className="h-2 bg-gray-200 rounded-full max-w-[300px] my-2 mx-1"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
}