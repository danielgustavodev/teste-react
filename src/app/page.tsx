// import Image from "next/image";
import { Card } from "@/components/cards";
import "../app/fonts.css";
import { Button, ButtonGray } from "@/components/buttons";


export default function Home() {
  return (
    <div  className="alinhamento" >
      <div className="limite"> 
        <ButtonGray/>
        <h1 className="tituloPrincipal">From Idea to Impact</h1>
        <span className="subTitulo">We follow a streamlined approach to deliver exceptional digital products that exceed expectations.</span>
        <Button/>
      </div>

      <div className="divCards">
        <Card titulo="Discover" descricao="We start by understanding your goals, challenges, and vision to create a roadmap." img="/papel.png"></Card>
        <Card titulo="Design" descricao="Our designers craft user-centric solutions, blending creativity with functionality." img="/balde.png" ></Card>
        <Card titulo="Develop" descricao="Our developers bring designs to life with clean, scalable code." img="/laptop.png"></Card>
        <Card titulo="Deliver" descricao="We test rigorously and launch your product, ensuring its ready for the market." img="/globo.png"></Card>
      </div>
    </div>
  );
}
