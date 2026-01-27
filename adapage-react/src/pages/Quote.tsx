import { Link } from "react-router";
import {quotes} from "../data"


interface quotes {
    date: string,
    title: string,
    quote: string
}


export default function Quotes() {
  return (
    //       <nav>
    //     <button><Link to="/">Home</Link></button>
    //     <button><Link to="/quotes">Citations</Link></button>
    //     <button><Link to="/timeline">Timeline</Link></button>
    //   </nav>

    <div>
      <h1>Citations</h1>

      <main>

    <Quotes
     date={data.date}
     title={title.data}
    />

      </main>
    

    </div>
  );
}


