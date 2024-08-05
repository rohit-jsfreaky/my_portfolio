import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components/index";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <Home />

        <div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks/> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
