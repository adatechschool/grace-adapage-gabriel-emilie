import { Link } from "react-router";
import { quotes } from "../data";
import logoSofia from '../images/Logo-Sofia.png';

interface quotes {
    id: number,
    date: string;
    title: string;
    quote: string;
}


export default function Quotes() {
  return (
    <body>
    <div className="min-h-screen bg-[#EDD8D4]">
      <header>
      {/* Navigation */}
      <nav className="bg-[#533532] shadow-md" role="navigation" aria-label="Navigation principale">
  <div className="container mx-auto px-4 py-4">
    <div className="flex items-center justify-between flex-wrap">
      <Link to="/" className="" aria-label="Retour à l'accueil">
        <img 
          src={logoSofia} 
          alt="Retour à l'accueil" 
          className="h-12 w-auto hover:opacity-80 transition-opacity cursor-pointer"
        />
      </Link>
      
      <div className="flex gap-4">
        <Link 
          to="/quotes" 
          className="bg-[#825C56] text-[#EDD8D4] px-6 py-2 rounded-lg hover:bg-[#966F66] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#533532]"
          aria-current="page"
        >
          Quotes
        </Link>
        <Link 
          to="/timeline" 
          className="bg-[#966F66] text-[#EDD8D4] px-6 py-2 rounded-lg hover:bg-[#825C56] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#533532]"
        >
          Timeline
        </Link>
      </div>
    </div>
  </div>
</nav>
</header>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-[#533532] mb-12 text-center">
          Sofia Coppola's quotes
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {quotes.map((q) => (
            <article 
              key={q.id}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#966F66] hover:shadow-xl transition-shadow"
            >
              <div className="text-left">
                <time 
                  className="text-sm font-semibold text-[#6B606D] uppercase tracking-wide block mb-2"
                  dateTime={q.date}
                >
                  {q.date}
                </time>
                <h2 className="text-2xl font-bold text-[#533532] mb-4">
                  {q.title}
                  {q.filmTitle && <em>{q.filmTitle}</em>}
                </h2>
              </div>
              <blockquote className="text-lg text-[#825C56] italic leading-relaxed">
                "{q.quote}"
              </blockquote>
            </article>
          ))}    
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#533532] text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 - Projet Sofia Coppola - Gabriel Hono & Emilie Gainon
          </p>
        </div>
      </footer>
    </div>
    </body>
  );
}