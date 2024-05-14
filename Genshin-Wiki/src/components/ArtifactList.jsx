import React from "react";

const ArtifactList = ({ artifacts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-center">Name</th>
            <th className="py-3 px-6 text-center">2_set_bonus</th>
            <th className="py-3 px-6 text-center">4_set_bonus</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {artifacts.map((artifact) => (
            <tr key={artifact.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="flex py-3 px-6 text-center items-center">
                <img src={artifact.image_url} alt={artifact.name} className="h-20 w-auto" />
                <span className="ml-2">{artifact.name}</span>
              </td>
              <td className="py-3 px-6 text-center">
                <span className="ml-2">{artifact["2_set_bonus"]}</span>
              </td>
              <td className="py-3 px-6 text-center">
                <span className="ml-2">{artifact["4_set_bonus"]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtifactList;
