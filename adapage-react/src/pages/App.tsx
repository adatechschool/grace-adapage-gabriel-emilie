import { Link } from "react-router";
import '../App.css'
import logoSofia from '../images/Logo-Sofia.png';
import { charac } from "../data";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col">
      <header>
        <nav className="bg-[#533532] shadow-lg" role="navigation" aria-label="Navigation principale">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="group" aria-label="Retour à l'accueil">
                <img 
                  src={logoSofia} 
                  alt="Logo Sofia Coppola" 
                  className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              
              <div className="flex gap-4">
                <Link 
                  to="/quotes" 
                  className="bg-[#825C56] text-[#EDD8D4] px-8 py-3 rounded-lg font-semibold 
                           hover:bg-[#966F66] hover:shadow-lg transform hover:-translate-y-0.5 
                           transition-all duration-300 focus:outline-none focus:ring-2 
                           focus:ring-[#EDD8D4] focus:ring-offset-2 focus:ring-offset-[#533532]"
                >
                  Citations
                </Link>
                <Link 
                  to="/timeline" 
                  className="bg-[#966F66] text-[#EDD8D4] px-8 py-3 rounded-lg font-semibold 
                           hover:bg-[#825C56] hover:shadow-lg transform hover:-translate-y-0.5 
                           transition-all duration-300 focus:outline-none focus:ring-2 
                           focus:ring-[#EDD8D4] focus:ring-offset-2 focus:ring-offset-[#533532]"
                >
                  Timeline
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="grow">    
        <div className="container mx-auto px-6 py-16">
          {charac.map((elem) => (
            <div key={elem.id} className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-[#966F66] to-[#825C56] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img 
                    src={elem.img} 
                    alt="Portrait of Sofia Coppola"
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-[#825C56]"
                  />
                </div>

                <div className="space-y-8">
                  
                  <div>
                    <h1 className="font-monsieur text-7xl md:text-8xl text-[#EDD8D4] mb-2 leading-tight">
                      {elem.name}
                    </h1>
                    <p className="font-young-serif text-3xl text-[#966F66]">
                      ({elem.age})
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 bg-[#533532] rounded-xl p-6 border border-[#825C56]">
                    <div className="flex items-center gap-3">
                      <span className="text-[#966F66] font-bold text-sm uppercase tracking-wider">Country:</span>
                      <span className="text-[#EDD8D4] text-lg">{elem.country}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#966F66] font-bold text-sm uppercase tracking-wider">Astrologic sign:</span>
                      <span className="text-[#EDD8D4] text-lg">{elem.AstroSign}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#966F66] font-bold text-sm uppercase tracking-wider">Profession:</span>
                      <span className="text-[#EDD8D4] text-lg">{elem.profession}</span>
                    </div>
                  </div>

                  <div className="bg-linear-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-8 border border-[#6B606D] shadow-xl">
                    <h2 className="text-[#966F66] font-bold text-xl uppercase tracking-wide mb-4">
                      About Sofia
                    </h2>
                    <p className="text-[#EDD8D4] leading-relaxed text-base md:text-lg">
                      {elem.description}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </main> 

      <footer className="bg-[#533532] text-[#EDD8D4] py-8 mt-auto border-t-2 border-[#825C56]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © 2026 - Projet Sofia Coppola - 
            <span className="text-[#966F66] font-semibold"> Gabriel Hono & Emilie Gainon</span>
          </p>
        </div>
      </footer>
    </div>
  );
}