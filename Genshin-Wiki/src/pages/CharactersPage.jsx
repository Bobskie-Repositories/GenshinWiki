import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../context/DataContext";
import CharacterList from "../components/CharacterList";

const CharactersPage = () => {
  const { characters } = useData();

  // pagination
  const charactersPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters
    .sort((a, b) => b.rarity - a.rarity)
    .slice(indexOfFirstCharacter, indexOfLastCharacter);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(characters.length / charactersPerPage);
    return Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        onClick={() => paginate(index + 1)}
        className="mx-1 px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
      >
        {index + 1}
      </button>
    ));
  };
  //pagination

  return (
    <div className="flex justify-center">
      <div className="bg-slate-100 w-9/12 bg-opacity-90 py-8 px-10 my-10 rounded-lg">
        <span className="font-bold sm:text-xl md:text-3xl">Characters</span>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 mr-8 rounded">
            <NavLink to="add">Add Character</NavLink>
          </button>
        </div>
        <div className="border border-yellow-500 px-8 pb-8 pt-4 m-8 rounded-md">
          <CharacterList characters={currentCharacters} />
          <div className="flex justify-center mt-4">{renderPaginationButtons()}</div>
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
