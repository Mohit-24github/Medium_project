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

export const useBlogs = ()=>{
    const [loading, setLoading] = useState(true)
    const [blogs,setBlogs] = useState<blog[]>([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogs(response.data.blog)
            setLoading(false)
        })
    },[])
    return {blogs,loading}
}