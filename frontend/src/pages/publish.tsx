import axios from "axios"
import { AppBar } from "../components/appBar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = ()=>{
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [content,setContent] = useState("")
    return <div>
        <AppBar/>
        <div className="px-15 py-10"> 
            <label  className="block mx-1 mb-2 text-xl font-semibold text-gray-90">New Post</label>
            <input onChange={(e)=>{
                setTitle(e.target.value)
            }} aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" />
            <TextEditor onChange={(e)=>{
                setContent(e.target.value)
            }}/>
            <button onClick={async ()=>{
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title: title,
                    content: content 
                },{
                    headers:{
                        Authorization: localStorage.getItem("token")
                    }
                })
                navigate(`/blog/get/${response.data.id}`)
            }} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Publish</button>
        </div>
    </div>
}

function TextEditor({onChange}:{onChange: (e:ChangeEvent<HTMLTextAreaElement>)=>void}){
    return <div>
        <textarea onChange={onChange} rows={5} className="block my-3 p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
    </div>
}