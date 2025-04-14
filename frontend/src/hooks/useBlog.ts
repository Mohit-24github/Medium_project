import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

interface blog{
    id: string,
    content: string,
    title: string,
    author:{
        name: string
    }
}

export const useBlog = ({id}:{id:string})=>{
    const [loading, setLoading] = useState(true)
    const [blog,setBlog] = useState<blog>()

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/get/${id}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlog(response.data.blog)
            setLoading(false)
        })
    },[])
    return {blog,loading}
}