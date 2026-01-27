import { Link } from "react-router";
import '../App.css'
import logoSofia from '../images/Logo-Sofia.png';
import { charac } from "../data";

export default function App() {
  return (
    <>
    <div>
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
          Citations
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

      
  {/* contenu */}
  <div>
  {charac.map((elem) => (
  <div key={elem.id}>
  <h1>{elem.name} ({elem.age} years)</h1>
  <p>{elem.profession}</p>
  <p>{elem.description}</p>
  </div>
  ) )}
</div>



  {/* Footer */}
<footer className="bg-[#533532] text-white py-6 mt-16">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm">© 2026 - Projet Sofia Coppola</p>
    </div>
</footer>
    </div>
  </>
  );
}

