import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useInView } from 'react-intersection-observer'
// import { BrowserRoutes } from "react-router-dom";

function App() {

  const [ref, inView] = useInView({
    threshold: .9,
  });

  return (
    <>
      <Header isInview={inView} propRef={ref} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
