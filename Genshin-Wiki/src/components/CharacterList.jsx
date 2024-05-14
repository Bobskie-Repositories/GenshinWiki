import React from "react";

const CharacterList = ({ characters }) => {
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-4 mt-4 ">
      {characters.map((character) => (
        <div
          key={character.id}
          className="border border-slate-400 p-4 rounded-md flex flex-col items-center transition transform hover:scale-105 cursor-pointer hover:border-yellow-500"
        >
          <img
            src={`https://genshinlist.com/assets/img/characters/${character.slug}.png`}
            alt={character.name}
            className="h-20 w-auto"
          />
          <span className="mt-2">{character.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
