import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { FaEye,FaEyeSlash } from "react-icons/fa";
import {Link,useNavigate} from "react-router-dom"
import {signupType} from "@aryansindhi18/blogwebiste-common"
import axios from "axios";
interface authTypes{
    type: "signin" | "signup"
}
export function Auth({type}:authTypes){
    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<signupType>({
        name:"",
        email:"",
        password:""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/${type=='signup'?'signup':'signin'}`,postInputs)
            console.log(response.data);
            const jwt = response.data.token || "";
            localStorage.setItem("token",jwt);
            localStorage.setItem("name",response.data.name || "Unknown User")
            navigate('/blogs')
        }
        catch(e){
            console.log(e);
        }

    }
    const [showPassword,setShowPassword] = useState(true)


    return <div className="  h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="">
                <div className="px-10">
                    <div className="text-3xl font-extrabold mt-4">
                        {type==`signup`?'Create an account':`Sign in to your account`}
                    </div>
                    <div className="text-[#959AA4] flex justify-center">
                        <div className=" text-center ">
                            {type==`signup`?`Already have an account?`:`Don't have an account?`}
                        </div>
                        <Link to={type=='signup'?"/signin":`/signup`} className="underline ml-1">
                            {type==`signup`?`Login`:`Sign Up`}
                        </Link>
                    </div>
                </div>
                <div className="pt-6">
                    {type=='signup' && <LabelledInput label="Name" placeholder="Aryan Sindhi" onChange={(e)=>{
                    // setPostInputs({
                    //     ...postInputs,
                    //     name:e.target.value
                    // })
                        setPostInputs((prevState)=>{
                            return {
                                ...prevState,
                                name:e.target.value
                            }
                        })
                    }}/>}
                    <LabelledInput label="Email" placeholder="abc@xyz.com" onChange={(e)=>{
                        setPostInputs((prevState)=>{
                            return {
                                ...prevState,
                                email:e.target.value
                            }
                        })
                    }}/>
                    <LabelledInput label="Password" type="password" placeholder="******" onChange={(e)=>{
                        setPostInputs((prevState)=>{
                            return {
                                ...prevState,
                                password:e.target.value
                            }
                        })
                    }} setShowPassword={setShowPassword} showPassword={showPassword}/>
                </div>
                <button onClick={sendRequest} type="button" className=" mt-5 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                    {(type=='signup') ? 'Sign Up' : 'Sign In'}
                </button>
            </div>
        </div>
    </div>
}


interface LabelledInputType{
    label: string,
    placeholder:string,
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void,
    type?:string,
    setShowPassword? : Dispatch<SetStateAction<boolean>>,
    showPassword?: boolean
}
function LabelledInput({label, placeholder, onChange,type,setShowPassword,showPassword}:LabelledInputType){
    return <div className="mb-2">
        <div>
            <label htmlFor={label} className="block mb-1 text-sm font-semibold text-gray-900 ">{label}</label>
            <div className="relative">
                <input onChange={onChange} type={showPassword ? "password" : "text"} id={label} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
                {type=="password" && (
                <div 
                onClick={()=>{
                    if(setShowPassword)
                        setShowPassword(!showPassword)
                }}
                className="absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer">
                    {showPassword /*1==1*/ ? (
                        <FaEyeSlash className="text-gray-400" />
                    ) : (
                        <FaEye className="text-gray-400" />
                    )}
                </div>
            )}
            </div>
        </div>
    </div>
}