import { gql, useQuery } from "@apollo/client";
import { printIntrospectionSchema } from "graphql";
import { useGetlessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";






interface props{
    class: string
}

export default function Sidebar(props: props){
    const {data} = useGetlessonsQuery()
    return(
       <aside className={props.class}>

        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
            Cronograma de Aulas
        </span>

        <div className="flex flex-col gap-8">
           {data?.lessons.map(lesson =>{
            return(
                <Lesson
                key={lesson.id}
                title={lesson.title}
                availableAt={new Date(lesson.availableAt)}
                slug={lesson.slug}
                type={lesson.lessonType}
                />
            )
           })}
            
        </div>
       </aside>
    )
}