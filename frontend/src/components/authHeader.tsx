import { Link } from "react-router-dom"

interface header {
    heading: string,
    text: string,
    location: string,
    link: string
}

export function AuthHeader({heading,text,location,link}:header){
    return (
        <div className=" flex justify-center">
            <div>
                <div className="text-4xl font-bold text-center">
                    {heading}
                </div>
                <div className="text-slate-400 text-center">
                    {text} 
                    <Link className="underline" to={location}>{link}</Link> 
                </div>
            </div>
        </div>
    )
}