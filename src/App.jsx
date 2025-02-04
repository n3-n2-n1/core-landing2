import Benifits from "./Components/Benifits";
import Collabration from "./Components/Collabration";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";
import Roadmap from "./Components/Roadmap";
import Services from "./Components/Services";
function App() {
  return (
    <>
      <div className="overflow-hidden ">
        <Header />
        <Hero />
        <Services />
        <Benifits />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}

export default App;
