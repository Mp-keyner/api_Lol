"use client";
import apiLol from "@/api/Lol";
import React, { useEffect, useState } from "react";

const Pages = ({ params }) => {
  const [data, setData] = useState(null);
  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      console.log("datas");
      try {
        const { data } = await apiLol.get(`champion/${id}.json`);
        setData(data.data);
        console.log("funciona");
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    console.log("data");
  }, []);
  console.log(data);
  const data2 = Object.entries(data || {});
  console.log(data2);
  return (
    <>
      <div>pages con el ID {id}</div>
      {Object.entries(data || {}).map(([key, character]) => (
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
          }}
        >
          <div key={key}>
            <h1>{key}</h1>
            <p>{character.blurb}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pages;
