import { useEffect, useState } from "react";
import axios from "axios";
export interface Blogs{
    content: string,
    title: string,
    id: string
    author: {
        name: string
        }
}
export function useBlogs(){
    const [loading, setLoading] = useState(true);
    
    const [blogs, setBlogs] = useState<Blogs[]>([]);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response)=>{
                setBlogs(response.data.posts);
                setLoading(false)
            })
            .catch(e=>{
                console.log(e)
            })
    },[])

    return {
        loading,
        blogs
    }
}

//============================
export interface BlogType{
    content: string,
    title: string,
    id: string
    author: {
        name: string
        }
}
export function useBlog({id}:{id:string}){
    const [loading, setLoading] = useState(true);
    
    const [blog, setBlog] = useState<BlogType>();

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/get/${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response)=>{
                setBlog(response.data.post);
                setLoading(false)
            })
            .catch(e=>{
                console.log(e)
            })
    },[])

    return {
        loading,
        blog
    }
}