import { useState, useEffect } from "react"

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
            }
        }
    },[])

    const toggleTheme = () => {
        if(theme === "light"){
            document.documentElement.classList.add("dark");
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    }

    return (  );
}

export default ThemeToggle
