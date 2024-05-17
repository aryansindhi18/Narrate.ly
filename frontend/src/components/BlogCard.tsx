import { Link } from "react-router-dom"
interface BlogCardProps{
    id: string
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}
export function BlogCard({id,authorName,title,content,publishedDate}:BlogCardProps){
    return <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-slate-200 pb-3 w-screen max-w-screen-lg
     cursor-pointer">
        <div className=" flex">
            <div className=" flex justify-center flex-col">
                <Avatar name={authorName} size={46}/>
            </div>
            <div className=" font-extralight text-[#252525] pl-2 text-sm flex justify-center flex-col">
                {authorName}
            </div> 
            <div className="pl-2 flex justify-center flex-col">
                <Circle/>
            </div>
            <div className="font-thin text-[#8C8C8C] pl-2 text-sm flex justify-center flex-col">
                {publishedDate}
            </div>
        </div>
        <div className="text-xl font-bold pt-2">
            {title}
        </div>
        <div className="text-md font-thin text-[#191919]">
            {content.slice(0,100)+`...`}
        </div>
        <div className="text-[#7F7F7F] text-xs font-extralight pt-2">
            {`${Math.ceil(content.length/100)} min(s) read.`}
        </div>
        {/* <div className=" bg-slate-200 h-1 w-full">
        </div> */}
    </div>
    </Link>
}


export function Avatar({name/*,size=32*/}:{name:String,size?:number}){
    // return <div className={`relative inline-flex items-center justify-center size-[${size}px] overflow-hidden bg-gray-300 rounded-full `}>
    //     <span className={`${size==6?'text-sm':'text-lg'} text-gray-600 `}>
    //         {name[0] || "U"}
    //     </span>
    // </div>
    return <div className=" flex justify-center flex-col ">
    <div className=" rounded-full bg-slate-200 h-12 w-12  elative inline-flex items-center justify-center">
    <div className=" h-full text-xl flex flex-col justify-center">
        {String(name[0])}
    </div>
</div>
</div>
    
}

export function Circle(){
    return <div className="w-1 h-1 bg-slate-400 rounded-full">

    </div>
}