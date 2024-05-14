import React, { useState } from "react";
import { useData } from "../context/DataContext";
import ArtifactList from "../components/ArtifactList";

const ArtifactsPage = () => {
  const { artifacts } = useData();

  // pagination
  const artifactsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastArtifact = currentPage * artifactsPerPage;
  const indexOfFirstArtifact = indexOfLastArtifact - artifactsPerPage;
  const currentArtifacts = artifacts.slice(indexOfFirstArtifact, indexOfLastArtifact);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(artifacts.length / artifactsPerPage);
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
  // pagination

  return (
    <div className="flex justify-center">
      <div className="bg-slate-100 w-9/12 bg-opacity-90 py-8 px-10 my-10 rounded-lg">
        <span className="font-bold sm:text-xl md:text-3xl">Artifacts</span>
        <div className="border border-yellow-500 px-8 pb-8 pt-4 m-8 rounded-md">
          <ArtifactList artifacts={currentArtifacts} />
          <div className="flex justify-center mt-4">{renderPaginationButtons()}</div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsPage;
