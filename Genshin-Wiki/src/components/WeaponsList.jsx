import React from "react";

const WeaponsList = ({ weapons }) => {
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-4 mt-4 ">
      {weapons.map((weapon) => (
        <div
          key={weapon.id}
          className="border border-slate-400 p-4 rounded-md flex flex-col items-center transition transform hover:scale-105 cursor-pointer hover:border-yellow-500"
        >
          <img
            src={`https://genshinlist.com/assets/img/weapons/${weapon.slug}.png`}
            alt={weapon.name}
            className="h-20 w-auto"
          />
          <span className="mt-2">{weapon.name}</span>
        </div>
      ))}
    </div>
  );
};

export default WeaponsList;
