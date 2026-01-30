import '../App.css'
import { charac } from "../data";
import { Header } from "../components/Header";
import type { Character } from '../interfaces';
import { Footer } from '../components/footer';
import { ThemeToggle } from '../components/ThemeToggle';
import { formatTitle } from '../components/FormatTitleFilm';

export default function App() {
  return (
    <>
      <div className='min-h-screen bg-[#EDD8D4] dark:bg-[#2a1f1d] transition-colors duration-300'>
        <Header/>
        <ThemeToggle/>
        <main className="grow">    
          <div className="container mx-auto px-6 py-8">
            {charac.map((elem: Character) => (
              <div key={elem.id} className="max-w-7xl mx-auto">
                <div className="mb-6 flex items-center justify-center text-center gap-4">
                  <h1 className="font-monsieur text-[25rem] md:text-[30rem] lg:text-[35rem] text-[#533532] dark:text-[#EDD8D4] leading-tight">
                    {elem.name}
                  </h1>
                  <p className="font-young-serif text-1xl md:text-1xl lg:text-2xl text-[#966F66] dark:text-[#825C56]">
                    ({elem.age})
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-start"> 
                  
                  {/* IMAGE - Version avec contain et fond */}
                  <div className="relative group bg-[#966F66]/20 dark:bg-[#825C56]/20 rounded-2xl p-4 border-4 border-[#825C56] dark:border-[#966F66]">          
                    <div className="absolute inset-0 bg-linear-to-br from-[#966F66] to-[#825C56] dark:from-[#825C56] dark:to-[#966F66] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <img 
                      src={elem.img} 
                      alt={`Portrait of ${elem.name}`}
                      className="relative rounded-xl shadow-2xl w-full h-87.5 md:h-100 lg:h-112.5 object-cover"
                    />
                  </div>
                  
                  {/* INFORMATIONS */}
                  <div className="space-y-6">
                    
                    {/* Carte avec les détails */}
                    <div className="grid grid-cols-1 gap-3 bg-[#533532] dark:bg-[#EDD8D4] rounded-xl p-5 border-4 border-[#825C56] dark:border-[#966F66]">
                      <div className="flex items-center gap-3">
                        <span className="text-[#EDD8D4] dark:text-[#533532] font-young-serif font-bold text-sm uppercase tracking-wider">Country:</span>
                        <span className="text-[#EDD8D4] dark:text-[#533532] text-base md:text-lg">{elem.country}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#EDD8D4] dark:text-[#533532] font-young-serif font-bold text-sm uppercase tracking-wider">Astrologic sign:</span>
                        <span className="text-[#EDD8D4] dark:text-[#533532] text-base md:text-lg">{elem.AstroSign}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#EDD8D4] dark:text-[#533532] font-young-serif font-bold text-sm uppercase tracking-wider">Profession:</span>
                        <span className="text-[#EDD8D4] dark:text-[#533532] text-base md:text-lg">{elem.profession}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="bg-[#966F66] dark:bg-[#825C56] rounded-xl p-6 border-4 border-[#533532] dark:border-[#EDD8D4]">
                      <h2 className="text-[#533532] dark:text-[#EDD8D4] font-young-serif font-bold text-lg md:text-xl uppercase tracking-wide mb-3">
                        About {elem.name}
                      </h2>
                    <p 
                  className="text-[#533532] dark:text-[#EDD8D4] leading-relaxed text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: formatTitle(elem.description) }}
                />
          
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main> 
        <Footer/>
      </div>
    </>
  );
}