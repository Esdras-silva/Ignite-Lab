import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateUserMutation } from "../graphql/generated";



export default function Subscribe(){
    const navigate =useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail]= useState('')

    const [createSubscriber] = useCreateUserMutation()

    async function handleSubscribe(event:FormEvent){
       event.preventDefault();
        await createSubscriber({
            variables:{
                name,
                email
            }
        })

        navigate('/event')
    }

return(
    <div className="min-h-screen bg-blur bg-no-repeat flex items-center flex-wrap xl:flex-col xl:items-center ">
        <div className="flex justify-center items-center flex-wrap p- xl:w-full xl:max-w-[1100px]   xl:justify-between xl:mt-20 xl:mx-auto">
            <div className="p-10 xl:max-w-[640px] ">
                <Logo/>

                <h1 className=" mt-8 xl:text-[2.5rem] leading-tight">
                Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                </h1>

                <p className="mt-4 text-gray-200 leading-relaxed">
                Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                </p>
            </div>

            <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                <strong className="text-2xl xl:mb-6 block">Inscreva-se gratuitamente</strong>
                
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                    <input
                        className="bg-gray-900 rounded px-5 h-14"
                     type="text"
                      placeholder="Seu nome completo"
                      onChange={event => setName(event.target.value)}
                       />
                    <input
                        className="bg-gray-900 rounded px-5 h-14"
                     type="email"
                      placeholder="Digite seu e-mail"
                      onChange={event => setEmail(event.target.value)}
                      />

                      <button 
                      type="submit"
                      className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
                      >
                        Garantir minha vaga
                      </button>
                </form>
            </div>
        </div>

        <img src="/src/assets/Group-7735.png" className="block xl:mt-10 xl:inline"  alt="" />
    </div>
)
}