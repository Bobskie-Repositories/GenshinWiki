import React from "react";

const WeaponsList = ({ weapons }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal ">
            <th className="py-3 px-6 text-center">Weapon</th>
            <th className="py-3 px-6 text-center">Name</th>
            <th className="py-3 px-6 text-center">Type</th>
            <th className="py-3 px-6 text-center">Atk</th>
            <th className="py-3 px-6 text-center">Rarity</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {weapons.map((weapon) => (
            <tr key={weapon.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 flex justify-center ">
                <img src={weapon.image_url} alt={weapon.name} className="h-16 w-auto" />
              </td>
              <td className="py-3 px-6 text-center">
                <span className="ml-2">{weapon.name}</span>
              </td>
              <td className="py-3 px-6 text-center">
                <span className="ml-2">{weapon.type}</span>
              </td>
              <td className="py-3 px-6 text-center">
                <span className="ml-2">{weapon.atk}</span>
              </td>
              <td className="py-3 px-6 text-center">
                <span className="ml-2">{weapon.rarity}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeaponsList;
