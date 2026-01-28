import '../App.css'
import { charac } from "../data";
import { Header } from "../components/Header";
import { Footer } from '../components/footer';
import type { Character } from '../interfaces';

export default function App() {
  return (
    <>
    <body>
      <Header/>

      <main className="grow">    
        <div className="container mx-auto px-6 py-16">
          {charac.map((elem: Character) => (
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
                      <span className="text-[#EDD8D4] font-young-serif font-bold text-sm uppercase tracking-wider">Country:</span>
                      <span className="text-[#EDD8D4] text-lg">{elem.country}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#] font-bold text-sm uppercase tracking-wider">Astrologic sign:</span>
                      <span className="text-[#EDD8D4] text-lg">{elem.AstroSign}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#EDD8D4] font-bold text-sm uppercase tracking-wider">Profession:</span>
                      <span className="text-[#EDD8D4] text-lg">{elem.profession}</span>
                    </div>
                  </div>

                  <div className="bg-linear-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-8 border border-[#6B606D] shadow-xl">
                    <h2 className="text-[#EDD8D4] font-bold text-xl uppercase tracking-wide mb-4">
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
    
    <Footer/>
  </body>
  </>
  );
}