import { AppBar } from "../components/appBar"
import { BlogCard } from "../components/blogCard"
import { BlogsSkeleton } from "../components/blogsSkeleton"
import { useBlogs } from "../hooks/useBlogs"

export const Blogs =()=>{
    const { blogs , loading } = useBlogs()
    
    if (loading){
        return <div>
            <AppBar/>
            <div className="flex justify-center max-w-screen-xl">
                <div>
                    <BlogsSkeleton />
                    <BlogsSkeleton />
                    <BlogsSkeleton />
                    <BlogsSkeleton />
                    <BlogsSkeleton />
                </div>
            </div>
        </div>
    }

    return <div>
        <AppBar/>
        <div className="flex justify-center">    
            <div>
                {blogs.map(blog => <BlogCard id={blog.id} authorName={blog.author.name === null? "Anonymous": blog.author.name} title={blog.title} context={blog.content} publishedDate="14.04.2025"/>)}
            </div>
        </div>
    </div>
}