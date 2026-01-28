import { TimeLineItem } from "../components/TimelineItem";
import { timelineData } from "../data";
import '../App.css'
import { Link } from "react-router";


export default function Timeline() {
  return (
    <>
    <nav>
      <button><Link to='/'>Home</Link></button>
      <button><Link to="/quotes">Citations</Link></button>
      <button><Link to="/timeline">Timeline</Link></button>
    </nav>

    <div>
      <h1>Timeline</h1>
      {timelineData. length > 0 && (
        <div className="timeline-container">
          {timelineData.map((data, idx) => <TimeLineItem data={data} key={idx} />
          )}
        </div>
      )}
    </div>

      {/* Footer */}
      <footer className="bg-[#533532] text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 - Projet Sofia Coppola - Gabriel Hono & Emilie Gainon
          </p>
        </div>
      </footer>
    </>
  );
}