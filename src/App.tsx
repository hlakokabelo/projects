import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="border-t border-slate-900">
          <Projects />
        </div>

        <div className="border-t border-slate-900">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
