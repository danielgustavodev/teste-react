import React from "react";
import "../app/cards.css";
import Image from "next/image";

export function Card(props:any) {
  return (
    <div className="card">
      <div className="card-img"><Image src={props.img} alt={props.titulo} width={50} height={50} />
      </div>
      <div>
        <h3 className="card-titulo">{props.titulo}</h3>
        <p className="card-descricao">{props.descricao}</p>
      </div>
    </div>
  );
}