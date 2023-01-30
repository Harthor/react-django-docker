import React, { useState, useEffect } from "react";

export const TestUser = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    fetch("http://localhost:8085")
      .then((response) => response.json())
      .then((data) => {
        console.log("data");
        setUserName(data.content.testUserName);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="posts-container">
          <div className="post-card">
          <h2 className="post-title">Bienvenido {userName} a Docker con Mysql, Django y React!!!</h2>            
          </div>
    </div>
  );
};
