import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <Hero />
      <Feature />
    </div>
  );
}

export default App;
