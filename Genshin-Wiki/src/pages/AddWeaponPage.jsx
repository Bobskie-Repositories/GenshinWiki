import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import apiConfig from "../config";

const AddWeaponPage = () => {
  const navigate = useNavigate();
  const [weaponInfo, setWeaponInfo] = useState({
    name: "",
    rarity: "",
    type: "",
    atk: "",
    obtain: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWeaponInfo({
      ...weaponInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://json-server-vercel-three-sigma.vercel.app/api/weapons`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(weaponInfo),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to save weapon");
      }
      setWeaponInfo({
        name: "",
        rarity: "",
        type: "",
        atk: "",
        obtain: "",
        image_url: "",
      });
      navigate("/weapons");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-slate-100 w-9/12 bg-opacity-90 py-8 px-10 my-10 rounded-lg">
        <Link to="/weapons">
          <FaArrowLeft />
        </Link>
        <span className="font-bold m-8 sm:text-xl md:text-3xl">Add Weapon</span>
        <div className="border border-yellow-500 px-8 pb-8 pt-4 m-8 rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={weaponInfo.name}
                onChange={handleChange}
                className="border border-gray-400 rounded-md py-2 px-3 w-full"
                required
              />
            </div>
            <div className="flex gap-8 items-center justify-center">
              <div className="mb-4">
                <label htmlFor="rarity" className="block font-semibold mb-2">
                  Rarity:
                </label>
                <select
                  id="rarity"
                  name="rarity"
                  value={weaponInfo.rarity}
                  onChange={handleChange}
                  className="border border-gray-400 rounded-md py-2 px-3 w-full"
                  required
                >
                  <option value="">Select Rarity</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="type" className="block font-semibold mb-2">
                  Type:
                </label>
                <select
                  id="type"
                  name="type"
                  value={weaponInfo.type}
                  onChange={handleChange}
                  className="border border-gray-400 rounded-md py-2 px-3 w-full"
                  required
                >
                  <option value="">Select type</option>
                  <option value="bows">Bows</option>
                  <option value="polearms">Polearms</option>
                  <option value="sword">Sword</option>
                  <option value="claymore">Claymore</option>
                  <option value="catalyst">Catalyst</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="atk" className="block font-semibold mb-2">
                  Attack Dmg:
                </label>
                <input
                  type="text"
                  id="atk"
                  name="atk"
                  value={weaponInfo.atk}
                  onChange={handleChange}
                  className="border border-gray-400 rounded-md py-2 px-3 w-full"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="obtain" className="block font-semibold mb-2">
                Obtain:
              </label>
              <input
                type="text"
                id="obtain"
                name="obtain"
                value={weaponInfo.obtain}
                onChange={handleChange}
                className="border border-gray-400 rounded-md py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image_url" className="block font-semibold mb-2">
                Image URL:
              </label>
              <input
                type="text"
                id="image_url"
                name="image_url"
                value={weaponInfo.image_url}
                onChange={handleChange}
                className="border border-gray-400 rounded-md py-2 px-3 w-full"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWeaponPage;
