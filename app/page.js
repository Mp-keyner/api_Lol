"use client";
import apiLol from "@/api/Lol";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiLol.get();
        setData(data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(17pc, 1fr))",
      }}
    >
      {Object.entries(data || {}).map(([key, character], index) => (
        <div
          key={index}
          className="card"
          style={{
            border: "1px solid white",
            margin: 10,
            position: "relative",
          }}
        >
          <div
            className="background"
            style={{
              backgroundImage: `url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${character.name}_0.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: 0.5, // Cambia este valor para ajustar la opacidad
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: -1,
              filter: "blur(4px)",
            }}
          ></div>
          <div
            className="content"
            style={{
              position: "relative",
            }}
          >
            <h1>{character.title}</h1>
            <h3>Name: {character.name}</h3>
            <p>Blurb: {character.blurb}</p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${character.image.full}`}
                alt={character.name}
              />
              <div>
                <p>attack: {character.info.attack}</p>
                <p>defense: {character.info.defense}</p>
                <p>difficulty: {character.info.difficulty}</p>
                <p>magic: {character.info.magic}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
