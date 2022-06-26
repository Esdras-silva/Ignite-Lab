import { X, List } from "phosphor-react";
import { Logo } from "./Logo";


const width = window.innerWidth;
let w : boolean;
 if(width < 1280){
    w = true
}else{
    w = false
}

console.log(w)

export default function Header(){
    return(
        <header className="xl:w-full w-[12rem] py-5 flex p-4 items-center justify-between bg-gray-700 border-b border-gray-600"> 
            <Logo />
            
        </header>
    )
}