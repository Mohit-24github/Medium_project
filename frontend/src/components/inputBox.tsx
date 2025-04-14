import { ChangeEvent} from "react"

interface labbledInputType {
    title: string,
    placeHolder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}
export function InputBox({title,placeHolder,onChange,type}: labbledInputType){
    return (
        <div>
            <div className="text-sm text-left font-medium py-2 px-2 ">
                {title}
            </div>
            <input type={type || "text"}  onChange={onChange} placeholder={placeHolder} className="w-full px-2 py-1 border rounded-md border-slate-30"/>
        </div>
    )
}