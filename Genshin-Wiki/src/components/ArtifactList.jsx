import React from "react";

const ArtifactList = ({ artifacts }) => {
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-4 mt-4 ">
      {artifacts.map((artifact) => (
        <div
          key={artifact.id}
          className="border border-slate-400 p-4 rounded-md flex flex-col items-center transition transform hover:scale-105 cursor-pointer hover:border-yellow-500"
        >
          <img
            src={`https://genshinlist.com/assets/img/artifacts/${artifact.slug}.png`}
            alt={artifact.name}
            className="h-20 w-auto"
          />
          <span className="mt-2">{artifact.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ArtifactList;
