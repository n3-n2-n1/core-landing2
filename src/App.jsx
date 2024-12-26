import Benifits from "./Components/Benifits";
import Collabration from "./Components/Collabration";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Roadmap from "./Components/Roadmap";
import Services from "./Components/Services";
function App() {
  return (
    <>
      <div className="overflow-hidden ">
        <Header />
        <Hero />
        <Benifits />
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default App;
