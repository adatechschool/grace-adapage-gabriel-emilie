import '../App.css'
import { charac } from "../data";
import { Header } from "../components/Header";
import type { Character } from '../interfaces';
import { Footer } from '../components/footer';

export default function App() {
  return (
    <>
      <div className='min-h-screen bg-[var(--color-bg)] transition-colors duration-300'>
        <Header/>
        <main className="grow">    
          <div className="container mx-auto px-6 py-8">
            {charac.map((elem: Character) => (
              <div key={elem.id} className="max-w-7xl mx-auto">
                <div className="mb-6 flex items-center justify-center text-center gap-4">
                  <h1 className="font-monsieur text-[25rem] md:text-[30rem] lg:text-[35rem] text-[var(--color-text)] leading-tight">
                    {elem.name}
                  </h1>
                  <p className="font-young-serif text-1xl md:text-1xl lg:text-2xl text-[var(--color-secondary)]">
                    ({elem.age})
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-start"> 
                  
                  {/* IMAGE - Version avec contain et fond */}
                  <div className="relative group bg-[var(--color-secondary)]/20 rounded-2xl p-4 border-4 border-[var(--color-tertiary)]">          
                    <div className="absolute inset-0 bg-linear-to-br from-[var(--color-secondary)] to-[var(--color-tertiary)] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <img 
                      src={elem.img} 
                      alt={`Portrait of ${elem.name}`}
                      className="relative rounded-xl shadow-2xl w-full h-87.5 md:h-100 lg:h-112.5 object-cover"
                    />
                  </div>
                  
                  {/* INFORMATIONS */}
                  <div className="space-y-6">
                    
                    {/* Carte avec les détails */}
                    <div className="grid grid-cols-1 gap-3 bg-[var(--color-dark)] rounded-xl p-5 border-4 border-[var(--color-tertiary)]">
                      <div className="flex items-center gap-3">
                        <span className="text-[var(--color-primary)] font-young-serif font-bold text-sm uppercase tracking-wider">Country:</span>
                        <span className="text-[var(--color-primary)] text-base md:text-lg">{elem.country}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[var(--color-primary)] font-young-serif font-bold text-sm uppercase tracking-wider">Astrologic sign:</span>
                        <span className="text-[var(--color-primary)] text-base md:text-lg">{elem.AstroSign}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[var(--color-primary)] font-young-serif font-bold text-sm uppercase tracking-wider">Profession:</span>
                        <span className="text-[var(--color-primary)] text-base md:text-lg">{elem.profession}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="bg-[var(--color-secondary)] rounded-xl p-6 border-4 border-[var(--color-dark)]">
                      <h2 className="text-[var(--color-dark)] font-young-serif font-bold text-lg md:text-xl uppercase tracking-wide mb-3">
                        About {elem.name}
                      </h2>
                      <p className="text-[var(--color-dark)] leading-relaxed text-sm md:text-base">
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
      </div>
    </>
  );
}