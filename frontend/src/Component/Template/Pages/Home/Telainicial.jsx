import Header from "../../Header/Header";
import Nav from "../../Nav/Nav"
import Home from "./ConteudoHome"
import 'bootstrap'

function Main (){
    return (
        <main>
            <Header/>
            <Nav />
            <Home />
        </main>      
    )
}

export default Main