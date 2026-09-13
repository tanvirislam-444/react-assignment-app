import { Suspense } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Technologies from "./Components/Technologies/Technologies";
import type { TechnologiesType } from "./Components/types/technologiesType";
import Footer from "./Components/Footer";
import './App.css'


const technologiesPromise = async():Promise<TechnologiesType[]>=>{
const res = await fetch ('/public/data.json');
const data =await res.json();
return data;
}

function App() {


  return (
   <>
   <Nav/>
   <Banner/>
   <Suspense fallback={<h2>Loading......</h2>}>
     <Technologies technologiesPromise={technologiesPromise()}/>
   </Suspense>
   <Footer/>
   </>
  )
}

export default App
