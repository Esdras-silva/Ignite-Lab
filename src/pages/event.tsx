import { ArrowArcRight, ArrowCircleRight, ArrowDownRight, List, X } from "phosphor-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Video from "../components/Video";

const width = window.innerWidth;
let w : boolean;

if(width <1280){
    w = true
}else {
    w= false
}


export default function Event(){
const {slug} =useParams<{slug: string}>()

const [active, setActive] = useState(false);

const toggle =()=>{
    setActive(!active)
}
    return(
        <div className="flex flex-col min-h-screen">
            <div className="flex items-center justify-between gap-2 bg-gray-700 border-b border-gray-600">
               <Header/> 
               {
                w? (
                <div className="flex justify-center items-center mx-4 ">
                <p className="block my-3 mx-2">
                    Aulas
                </p>
    
                <div>
                    <span className="block" onClick={toggle}>
                        {
                            active ? (
                            <div className="text-blue-500">
                                <X size={40}/>
                            </div>
                            ) : (
                                <div className="text-blue-500">
                                    <List size={40}/>
                                </div>
                            )
                        }
                    </span>
                </div>
            </div>): <> </>
               }
            </div>
        
        
        <main className="flex flex-1 justify-center">
            
                    {
                      active ? (
                        <Sidebar class="mt-5 "/>
                      ):
                      (
                        <>
                        {
                            slug ? <Video lessonSlug={slug}/> : (
                        <div className="flex-1 flex  p-8 justify-center items-center text-green-500">
                            {
                                <>
                                {
                              w? (
                                <>
                                <h1 className=" text-[15px] xl:text-2xl leading-relaxed ">Clique no menu e escolha uma aula </h1><List size={40}/>
                                </>
                            ): (
                                <>
                                <h1 className=" text-[15px] xl:text-2xl leading-relaxed ">Clique em uma aula para iniciar </h1><ArrowCircleRight size={40}/>
                                </>
                            )
                        }
                                </>
                            }
                        </div>)
                        }
                        </>
                      )
                    }

                    {
                        w? <Sidebar class="hidden"/> : <Sidebar class="p-4 border border-gray-500"/>
                    }
            
        </main>
       </div>
    )
}