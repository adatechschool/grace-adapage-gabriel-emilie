export interface Quote {
    id: number;
    date: string;
    title: string;
    filmTitle: string | null;
    quote: string;
}

export interface Character {
    id: number;
    name: string;
    profession: string;
    age: number;
    country: string;
    AstroSign: string;
    description: string;
    img: string;
    importantWorks: string[];
}

export interface TimelineItemType {
    year: number;
    description: string;
    img: string;
    category: {
        type: string;
        color: string;
    };
}