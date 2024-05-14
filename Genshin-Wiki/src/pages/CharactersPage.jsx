import React from "react";
import { useData } from "../context/DataContext";
import CharacterList from "../components/CharacterList";

const CharactersPage = () => {
  const { characters } = useData();

  return (
    <div className="flex justify-center">
      <div className="bg-slate-100 w-9/12 bg-opacity-90 py-8 px-10 my-10 rounded-lg">
        <span className="font-bold sm:text-xl md:text-3xl">Characters</span>
        <div className="border border-yellow-500 px-8 pb-8 pt-4 m-8 rounded-md">
          <CharacterList characters={characters} />
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
