import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import apiConfig from "../config";

const AddArtifactPage = () => {
  const navigate = useNavigate();
  const [artifactInfo, setArtifactInfo] = useState({
    name: "",
    "2_set_bonus": "",
    "4_set_bonus": "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtifactInfo({
      ...artifactInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiConfig.API_URL}/artifacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artifactInfo),
      });
      if (!response.ok) {
        throw new Error("Failed to save artifact");
      }
      setArtifactInfo({
        name: "",
        slug: "",
        "2_set_bonus": "",
        "4_set_bonus": "",
        image_url: "",
      });
      navigate("/artifacts");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-slate-100 w-9/12 bg-opacity-90 py-8 px-10 my-10 rounded-lg">
        <Link to="/artifacts">
          <FaArrowLeft />
        </Link>
        <span className="font-bold m-8 sm:text-xl md:text-3xl">Add Artifact</span>
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
                value={artifactInfo.name}
                onChange={handleChange}
                className="border border-gray-400 rounded-md py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="2_set_bonus" className="block font-semibold mb-2">
                2-Set Bonus:
              </label>
              <input
                type="text"
                id="2_set_bonus"
                name="2_set_bonus"
                value={artifactInfo["2_set_bonus"]}
                onChange={handleChange}
                className="border border-gray-400 rounded-md py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="4_set_bonus" className="block font-semibold mb-2">
                4-Set Bonus:
              </label>
              <input
                type="text"
                id="4_set_bonus"
                name="4_set_bonus"
                value={artifactInfo["4_set_bonus"]}
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
                value={artifactInfo.image_url}
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

export default AddArtifactPage;
