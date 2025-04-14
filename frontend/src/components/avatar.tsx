
export function Avatar({name,size = "small"}:{name:string,size?:"small"|"big"}){
    return <div className={`relative inline-flex items-center justify-center ${size === "small"? "w-6 h-6":"w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`${size === "small"?"text-xs": "text-md"} text-gray-600 dark:text-gray-300`}>
        { name.split(' ').map(part => part[0]).join('').toUpperCase()}
        </span>
    </div>
} 