import { useParams } from "react-router-dom"
import { useBlog } from "../hooks/useBlog"
import { CompleteBlog } from "../components/completeBlog"
import { AppBar } from "../components/appBar"
import { BlogSkeleton } from "../components/blogSkeleton"

export const Blog =()=>{
    const {id} = useParams()
    const {loading, blog} = useBlog({
        id: id || ""
    })
    if (loading){
            return <div>
                <AppBar/>
                <BlogSkeleton />
            </div>
        }
    return <div>
        <CompleteBlog blog={blog || {id:"",title:"",content:"",author:{name:""}}}/>
    </div>
}