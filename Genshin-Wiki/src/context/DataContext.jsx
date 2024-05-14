import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersResponse = await fetch("http://localhost:8000/characters");
        const charactersData = await charactersResponse.json();
        setCharacters(charactersData);

        const weaponsResponse = await fetch("http://localhost:8000/weapons");
        const weaponsData = await weaponsResponse.json();
        setWeapons(weaponsData);

        const artifactsResponse = await fetch("http://localhost:8000/artifacts");
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
