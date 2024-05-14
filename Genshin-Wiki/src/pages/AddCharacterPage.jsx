import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import apiConfig from "../config";

const AddCharacterPage = () => {
  const navigate = useNavigate();
  const [characterInfo, setCharacterInfo] = useState({
    name: "",
    description: "",
    rarity: "",
    vision: "",
    weapon: "",
    obtain: "",
    birthday: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacterInfo({
      ...characterInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiConfig.API_URL}/characters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(characterInfo),
      });
      if (!response.ok) {
        throw new Error("Failed to save character");
      }
      setCharacterInfo({
        name: "",
        description: "",
        rarity: "",
        vision: "",
        weapon: "",
        obtain: "",
        birthday: "",
        image_url: "",
      });
      navigate("/characters");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-slate-100 w-9/12 bg-opacity-90 py-8 px-10 my-10 rounded-lg">
        <Link to="/characters">
          <FaArrowLeft />
        </Link>
        <span className="font-bold m-8 sm:text-xl md:text-3xl ">Add Character</span>
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
                value={characterInfo.name}
                onChange={handleChange}
                className="border border-gray-400 rounded-md py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block font-semibold mb-2">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={characterInfo.description}
                onChange={handleChange}
                className="border border-gray-400 rounded-md py-2 px-3 w-full h-24"
                required
              />
            </div>

            <div className="flex gap-8 items-center justify-center">
              <div className="mb-4">
                <label htmlFor="gender" className="block font-semibold mb-2">
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={characterInfo.gender}
                  onChange={handleChange}
                  className="border border-gray-400 rounded-md py-2 px-3 w-full"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="birthday" className="block font-semibold mb-2">
                  Birthday:
                </label>
                <input
                  type="text"
                  id="birthday"
                  name="birthday"
                  value={characterInfo.birthday}
                  onChange={handleChange}
                  className="border border-gray-400 rounded-md py-2 px-3 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="rarity" className="block font-semibold mb-2">
                  Rarity:
                </label>
                <select
                  id="rarity"
                  name="rarity"
                  value={characterInfo.rarity}
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
                <label htmlFor="vision" className="block font-semibold mb-2">
                  Vision:
                </label>
                <select
                  id="vision"
                  name="vision"
                  value={characterInfo.vision}
                  onChange={handleChange}
                  className="border border-gray-400 rounded-md py-2 px-3 w-full"
                  required
                >
                  <option value="">Select vision</option>
                  <option value="geo">Geo</option>
                  <option value="pyro">Pyro</option>
                  <option value="anemo">Anemo</option>
                  <option value="cryo">Cryo</option>
                  <option value="hydro">Hydro</option>
                  <option value="electro">Electro</option>
                  <option value="dendro">Dendro</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="weapon" className="block font-semibold mb-2">
                  Weapon:
                </label>
                <select
                  id="weapon"
                  name="weapon"
                  value={characterInfo.weapon}
                  onChange={handleChange}
                  className="border border-gray-400 rounded-md py-2 px-3 w-full"
                  required
                >
                  <option value="">Select weapon</option>
                  <option value="bows">Bows</option>
                  <option value="polearms">Polearms</option>
                  <option value="sword">Sword</option>
                  <option value="claymore">Claymore</option>
                  <option value="catalyst">Catalyst</option>
                </select>
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
                value={characterInfo.obtain}
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
                value={characterInfo.image_url}
                onChange={handleChange}
                className="border border-gray-400 rounded-md py-2 px-3 w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCharacterPage;
