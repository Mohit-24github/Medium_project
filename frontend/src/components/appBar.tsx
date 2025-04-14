import { Link } from "react-router-dom"
import { Avatar } from "./avatar"

export const AppBar = ()=>{
    return <div className="border-b border-slate-100 shadow-sm flex justify-between px-10 py-4">
        <Link to={"/blogs"} className="flex justify-center flex-col cursor-pointer">
            Medium App
        </Link>
        <div className="flex">
            <Link to={"/publish"} className="flex justify-center flex-col">
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 ">New Post</button>
            </Link>
            <div className="flex justify-center flex-col">
                <Avatar name="Mohit S" size={"big"}/>
            </div>
        </div>
    </div>
}