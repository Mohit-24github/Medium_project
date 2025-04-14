import { Link } from "react-router-dom"
import { Avatar } from "./avatar"

interface blockCardProbs {
    id: string,
    authorName: string,
    title: string,
    context: string,
    publishedDate: string
}

export const BlogCard =({authorName,title,context,publishedDate,id}:blockCardProbs)=> {
    return <Link to={`/blog/get/${id}`}>
        <div className="border-b-1 border-slate-300 pb-3 p-4 min-w-md max-w-screen-xl cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col pr-2"><Avatar name={authorName} size={"small"}/></div>
                <div className="">
                    {authorName}
                </div> 
                <div className=" flex justify-center flex-col pl-2 text-xs text-slate-500"> &#9679; </div>
                <div className="flex justify-center flex-col pl-2 font-thin text-slate-600">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-bold pt-2">
                {title}
            </div>
            <div className="text-md font-thin pt-1.5 font-serif">
                {context.length > 100 ? context.slice(0, 100) + "..." : context}
            </div>
            <div className="text-slate-600 text-sm font-thin pt-3">
                {`${Math.ceil(context.length / 225)} min read`}
            </div>
        </div>
    </Link>
}