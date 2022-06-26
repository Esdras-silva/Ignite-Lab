import { ApolloProvider, gql, useQuery } from "@apollo/client";
import Lesson from "./components/Lesson";
import { client } from "./lib/apollo"
import Event from "./pages/event";
import { Router } from "./Router";


function App() {


  return (
  <>
   
   <ApolloProvider client={client}>
    <Router/>
    </ApolloProvider>

  </>
  
  )
}

export default App
