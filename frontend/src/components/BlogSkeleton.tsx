import { Circle } from "./BlogCard";

export function BlogSkeleton(){
    return <div className="flex justify-center">
    <div role="status" className="max-w-sm animate-pulse">
    <div className="p-4 border-b border-slate-200 pb-3 w-screen max-w-screen-lg
     cursor-pointer">
        <div className=" flex">
            <div className=" flex justify-center flex-col">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"/>
            </div>
            <div className=" font-extralight text-[#252525] pl-2 text-sm flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"/>
            </div> 
            <div className="pl-2 flex justify-center flex-col">
                <Circle/>
            </div>
            <div className="font-thin text-[#8C8C8C] pl-2 text-sm flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"/>
            </div>
        </div>
        <div className="text-xl font-bold pt-2">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"/>
        </div>
        <div className="text-md font-thin text-[#191919]">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"/>
        </div>
        <div className="text-[#7F7F7F] text-xs font-extralight pt-2">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"/>
        </div>
    </div>
        {/* <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"/>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"/>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"/>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"/>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"/>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"/> */}
        <span className="sr-only">Loading...</span>
    </div>
    </div>
    
}