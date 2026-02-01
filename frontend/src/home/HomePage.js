import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Award from './Award';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAcoount from '../OpenAcoount';
import Education from './Education';


function HomePage() {
    const navigate = useNavigate();
    const [cookie,removeCookie] = useCookies([]);
    const [username,setUsername] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
            if(!cookie.token){
                navigate('/');
            }
            const {data} = await axios.post(
                "http://localhost:8000",
                {},
                {withCredentials:true}
            );
            const {status,user} = data;
            setUsername(user);
            return status ? toast(`Hello ${user}`,{
                position:"top-right",
            }) : (removeCookie("token"),navigate("/"));
        };
        verifyCookie();
    },[cookie,navigate,removeCookie]);
    const Logout = () => {
        removeCookie("token");
        navigate("/signup");
    };

    return ( 
        <>
           
            <Hero logout={Logout} name={username}/>
            <Award/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAcoount/>
           
        </>
     );
}

export default HomePage;