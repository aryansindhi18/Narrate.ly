import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { Appbar } from "../components/Appbar"
export function Blog(){
    const {id} = useParams()
    const undefinedBlog = {
        content: '',
        title: '',
        id: '',
        author: {
            name: ''
        }
    }
    const {blog,loading} = useBlog({id: id||""})
    if(loading){
        return <div>
        <Appbar/>
        <div className=" m-20">
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
        </div>
    }
    return <>
        <FullBlog blog={blog===undefined ? undefinedBlog : blog }/>
    </>
}