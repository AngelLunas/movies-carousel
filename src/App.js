import Header from "./Components/Header";
import Carousel from "./Components/Carousel";

const App = () => {
  return (
    <>
    <Header />
    <Carousel layout='row' title='Action & Drama Movies'/>
    <Carousel layout='row-reverse' title='Funniest Comedy Movies of 2018' />
    </>
  )
}

export default App;
