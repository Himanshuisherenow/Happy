import Footer from "./Footer";
import Header from "./Header";
import Contact from "./ContactUs";
import About from "./AboutUs";
import Home from "./Home";


function App(){

    const [count,setCount] = useState(0);

    return (
        <>
        <Header/>
        <Home/>
        <Footer/>
        </>
    )
}
