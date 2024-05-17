import { Appbar } from "./Appbar"
import { BlogType } from "../hooks"
import { Avatar } from "./BlogCard"
export function FullBlog({blog}:{blog:BlogType }){
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 w-full px-10 max-w-screen-xl pt-12">
                <div className="col-span-8 ">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-[#898E9A] pt-2">
                        Posted on 2nd Jan,2024.
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 ">
                    <div className="text-[#2C2C2C]">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className=" pr-4 flex justify-center flex-col">
                            <Avatar name={blog.author.name} size={46}/>
                        </div>
                        <div>
                            <div className=" text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="text-[#848A96] pt-2">
                                Penning tales, crafting dreams, one word at a time.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
}