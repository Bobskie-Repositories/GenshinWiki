import React from "react";
import { useData } from "../context/DataContext";
import ArtifactList from "../components/ArtifactList";

const ArtifactPage = () => {
  const { artifacts } = useData();

  return (
    <div className="flex justify-center">
      <div className="bg-slate-100 w-9/12 bg-opacity-90 py-8 px-10 my-10 rounded-lg">
        <span className="font-bold sm:text-xl md:text-3xl">Artifacts</span>
        <div className="border border-yellow-500 px-8 pb-8 pt-4 m-8 rounded-md">
          <ArtifactList artifacts={artifacts} />
        </div>
      </div>
    </div>
  );
};

export default ArtifactPage;
