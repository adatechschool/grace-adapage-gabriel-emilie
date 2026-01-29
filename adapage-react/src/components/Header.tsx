import { Link } from "react-router";
import '../App.css'
import logoSofia from '../images/Logo-Sofia.png';
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => (
<header>
<nav className="bg-[#533532] shadow-lg" role="navigation" aria-label="Navigation principale">
    <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            <Link to="/" className="group" aria-label="Retour à l'accueil">
                <img 
                  src={logoSofia} 
                  alt="Logo Sofia Coppola" 
                  className="h-14 w-auto"
                />
            </Link>

            <ThemeToggle/>
             
            <div className="flex gap-4">
                <Link to="/quotes" 
                        className="no-underline bg-[#2a2a2a] text-[#EDD8D4] border-2 border-[#8FA9A3] px-8 py-3 rounded-lg font-semibold 
                                hover:bg-[#8FA9A3] hover:text-[#533532] hover:border-[#8FA9A3] hover:shadow-lg hover:shadow-[#8FA9A3]/30
                                    transform hover:-translate-y-0.5 transition-all duration-300 
                                    focus:outline-none focus:ring-2 focus:ring-[#8FA9A3] focus:ring-offset-2 focus:ring-offset-[#533532]"
                >
                Quotes
                </Link>
            
                <Link to="/timeline" 
                    className="no-underline bg-[#2a2a2a] text-[#EDD8D4] border-2 border-[#8FA9A3] px-8 py-3 rounded-lg font-semibold 
                                hover:bg-[#8FA9A3] hover:text-[#533532] hover:border-[#8FA9A3] hover:shadow-lg hover:shadow-[#8FA9A3]/30
                                    transform hover:-translate-y-0.5 transition-all duration-300 
                                    focus:outline-none focus:ring-2 focus:ring-[#8FA9A3] focus:ring-offset-2 focus:ring-offset-[#533532]"
                >
                Timeline
                </Link>

                <Link to="*" 
                    className="no-underline bg-[#2a2a2a] text-[#EDD8D4] border-2 border-[#8FA9A3] px-8 py-3 rounded-lg font-semibold 
                                hover:bg-[#8FA9A3] hover:text-[#533532] hover:border-[#8FA9A3] hover:shadow-lg hover:shadow-[#8FA9A3]/30
                                    transform hover:-translate-y-0.5 transition-all duration-300 
                                    focus:outline-none focus:ring-2 focus:ring-[#8FA9A3] focus:ring-offset-2 focus:ring-offset-[#533532]"
                >
                Photos
                </Link>

            </div>
        </div>
    </div>
</nav>
</header>
)