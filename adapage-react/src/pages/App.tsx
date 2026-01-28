import { Link } from "react-router";
import '../App.css'
import logoSofia from '../images/Logo-Sofia.png';
import { charac } from "../data";

export default function App() {
  return (
  <body>
    <header>
  {/* navigation */}    
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

 <main>    
  {/* contenu */}
  <div>
  {charac.map((elem) => (
  <div key={elem.id}>
  <div className="flex flex-wrap">
  <h1 className="font-monsieur text-10xl text-[#533532] mb-4">
        {elem.name}
      </h1>
      <p className="font-young-serif text-4xl text-[#825C56] mb-8">
        ({elem.age})
      </p> 
    </div>
  <img src={elem.img} alt="Portrait of Sofia Coppola"/>
  <p>{elem.country}</p>
  <p>{elem.AstroSign}</p>
  <p>{elem.profession}</p>
  <p>{elem.description}</p>
  </div>
  ) )}
</div>

</main> 

  {/* Footer */}
<footer className="bg-[#533532] text-white py-6 mt-16">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm">© 2026 - Projet Sofia Coppola  - Gabriel Hono & Emilie Gainon</p>
    </div>
</footer>
  </body>
  );
}

