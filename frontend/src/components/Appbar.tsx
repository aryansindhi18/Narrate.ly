import {Avatar} from './BlogCard'
import { Link } from 'react-router-dom'
export function Appbar(){
    const name : string = localStorage.getItem("name") || ""
    return <div className="flex justify-between border-b px-10 py-3">
        <Link to={'/blogs'} className='flex justify-center flex-col'>
            <div className='flex justify-center flex-col font-bold cursor-pointer text-xl '>
                Narrate.ly
            </div>
        </Link>
        <div className='flex '>
            <div className='flex justify-center items-center flex-col '>
                {/* <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4 ">
                    New Post
                </button> */}
                <Link to={'/publish'}>
                    <button className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-4 text-center me-2 mb-1 mt-1'>
                        New Post
                    </button>
                </Link>
            </div>
            <div className='flex justify-center flex-col'>
                
                <Avatar name={name} size={46}/>
            </div>
        </div>
    </div>
}