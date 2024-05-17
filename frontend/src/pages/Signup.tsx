import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export function Signup(){
    console.log(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/user/signup`)
    return <>
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <Auth type={"signup"}/>
        <div className=" invisible lg:visible bg-green">
            <Quote/>
        </div>
    </div>
    </>
}