import { ChangeEvent, TextareaHTMLAttributes, useState } from "react"
import { Appbar } from "../components/Appbar"
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function Publish(){
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const navigate = useNavigate();
    return <div>
        <Appbar/>
        <div className="flex justify-center w-full pt-8">
            <div className=" max-w-screen-lg w-full">
                <input value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                }} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" required />
            </div>
        </div>
        <TextEditor content={content} onChange={(e)=>{
            setContent(e.target.value)
        }}/>
        <div className="flex justify-center pt-4">
            <button onClick={async ()=>{
                const res = await axios.post(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/blog`,{
                    title,
                    content
                },{
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                if(res.data.postId){
                    setTitle('')
                    setContent('')
                    navigate(`/blog/${res.data.postId}`)
                }
                else{
                    alert(`Error in saving post...`)
                }
                // console.log(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/blog`)
                
            }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Publish post
        </button>
    </div>
    </div>
} 

function TextEditor({content,onChange}:{content:string,onChange: (e:ChangeEvent<HTMLTextAreaElement>)=>void}){
    return <>
    <div className="flex justify-center w-full pt-4">
        <div className="max-w-screen-lg w-full">
            <textarea value={content} onChange={onChange} rows={24} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..." required/>
        </div>
    </div>
    
    </> 
}