// src/components/FormatTitleFilm.tsx
export const formatTitle = (title: string): string => {
  return title.replace(
    /(Lost in Translation|Lost in translation|Marie Antoinette|Marie-Antoinette|The Beguiled|Somewhere|The Virgin Suicides|Lick the Star|New York Stories)/g, 
    '<em>$1</em>'
  );
};