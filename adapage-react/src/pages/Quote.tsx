import { quotes } from "../data";
import type { Quote } from '../interfaces';
import { Header } from "../components/Header";
import { Footer } from "../components/footer";

export default function Quotes() {
  return (
    <>
    <body>
    <div className="min-h-screen bg-[#EDD8D4]">
      
    <Header/>

      <main className="container mx-auto px-4 py-12">
        <h1 className="font-young-serif text-5xl font-bold text-[#533532] mb-12 text-center">
          Sofia Coppola's quotes
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {quotes.map((q: Quote) => (
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

 <Footer/>

    </div>
    </body>
    </>
  );
}