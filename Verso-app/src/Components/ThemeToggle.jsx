import { useState, useEffect } from "react"
import { BiAdjust } from "react-icons/bi";

const ThemeToggle = () => {
    
    const [theme, setTheme] = useState("light");
    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme){
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme); 
        }else{
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if(prefersDark){
                setTheme("dark");
                document.documentElement.classList.add("dark");
                document.documentElement.classList.remove("light");
            }
        }
    },[])

    const toggleTheme = () => {
        if(theme === "light"){
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            setTheme("dark");
            localStorage.setItem("theme", "dark"); 
        }else{
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }

    return ( 
        <button onClick={toggleTheme} className="">
            <BiAdjust size={30} /> {theme === "light" ? "" : ""}
        </button>
    );
}

export default ThemeToggle
