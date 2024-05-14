import React, { createContext, useContext, useEffect, useState } from "react";
import apiConfig from "../config";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersResponse = await fetch(
          `https://json-server-vercel-three-sigma.vercel.app/api/characters`
        );
        const charactersData = await charactersResponse.json();
        setCharacters(charactersData);

        const weaponsResponse = await fetch(
          `https://json-server-vercel-three-sigma.vercel.app/api/weapons`
        );
        const weaponsData = await weaponsResponse.json();
        setWeapons(weaponsData);

        const artifactsResponse = await fetch(
          `https://json-server-vercel-three-sigma.vercel.app/api/artifacts`
        );
        const artifactsData = await artifactsResponse.json();
        setArtifacts(artifactsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const contextValue = {
    characters,
    weapons,
    artifacts,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
