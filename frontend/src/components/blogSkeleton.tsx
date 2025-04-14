
export const BlogSkeleton =()=>{
    return <div>
        <div className="flex justify-center">
            <div className="grid grid-cols-5 px-25 w-full pt-15 max-w-screen-xl">
                <div className="grid col-span-3">
                    <div className="flex justify-center flex-col h-4 bg-gray-200 rounded-full w-55 my-2 mx-1"></div>
                    <div className="flex justify-center flex-col h-4 bg-gray-200 rounded-full w-40 my-2 mx-1"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] my-2 mx-1"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[420px] my-2 mx-1"></div> 
                    <div className="h-2 bg-gray-200 rounded-full max-w-[300px] my-2 mx-1"></div>
                </div>
                <div className="flex-col grid col-span-2">
                    <div className="flex justify-center flex-col h-4 bg-gray-200 rounded-full w-48 my-2 mx-1"></div>
                    <div className=" flex grid-cols-4">
                        <div className="flex justify-center flex-col pr-2 col-span-1">
                            <div className="flex justify-center flex-col h-8 w-8 bg-gray-200 rounded-full my-2 mx-1"></div>
                        </div>
                        <div className="col-span-3 pl-2">
                            <div className="flex justify-center flex-col h-4 bg-gray-200 rounded-full w-48 my-2 mx-1"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] my-2 mx-1"></div>
                            <div className="h-2 bg-gray-200 rounded-full my-2 mx-1"></div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}