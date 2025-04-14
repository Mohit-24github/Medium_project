import { AppBar } from "./appBar"
import { Avatar } from "./avatar"

interface blog{
    id: string,
    content: string,
    title: string,
    author:{
        name: string
    }
}

export const CompleteBlog = ( {blog} :{blog: blog})=>{
    return <div>
        <AppBar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-5 px-25 w-full pt-15 max-w-screen-xl">
                <div className="grid col-span-3">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-600 pt-3">
                        Published on 14.04.3035
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="flex-col grid col-span-2">
                    <div className="px-2 font-semibold text-lg">
                        Author
                    </div>
                    <div className=" flex grid-cols-4">
                        <div className="flex justify-center flex-col pr-2 col-span-1">
                            <Avatar name={blog.author.name === null? "Anonymous": blog.author.name} size="big"/>
                        </div>
                        <div className="col-span-3 pl-2">
                            <div className="font-bold text-xl pt-2">
                                {blog.author.name === null? "Anonymous": blog.author.name}
                            </div>
                            <div className="text-slate-500 pt-2">
                                This is the place where we give the description of the author after the website is updated a little bit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}