import React from "react";
import "../app/buttons.css";

export function Button(props: any) {
  return (
    <div className="button">
      <button className="button-black">
        Learn More <span className="ceta">↗</span>
      </button>
    </div>
  );
}

export function ButtonGray(props:any) {
    return (
      <div>
        <button className="button-gray">
          Our Process
        </button>
      </div>
    );
  }