import { Button } from "@/components/ui/button";
import {Card, CardDescription, CardTitle} from "@/components/ui/card";
import {MoveUpRight, FileText, Globe, PaintBucket, Laptop} from 'lucide-react';

const conteudoCard = [
    {
      icon: <FileText size={50} className="text-[#84CC16]"/>,
      title: "Discover.",
      description: "We start by understanding your goals, challenges, and vision to create a roadmap.",
    },
    {
      icon: <PaintBucket size={50} className="text-[#84CC16]"/>,
      title: "Design",
      description: "Our designers craft user-centric solutions, blending creativity with functionality.",
    },
    {
      icon: <Laptop size={50} className="text-[#84CC16]"/>,
      title: "Develop",
      description: "Our developers bring designs to life with clean, scalable code.",
    },
    {
      icon: <Globe size={50} className="text-[#84CC16]"/>,
      title: "Deliver",
      description: "We test rigorously and launch your product, ensuring its ready for the market.",
    },
]

export default function Home() {
    return (
        <div className=" h-screen flex justify-center">
            <div className="max-w-xl">
                <Button className="bg-white hover:bg-white m-5 h-10 border-2 text-black p-2">Our Process</Button>
                <h1 className="text-3xl m-5">From Idea to Impact</h1>
                <p className="m-5 max-w-md text-gray-600">We follow a streamlined approach to deliver exceptional digital products that exceed expectations.</p>
                <Button className="m-5">Learn More <MoveUpRight/></Button>
            </div>
            <div className="">
                {conteudoCard.map((conteudoCard, index) => (
                    <Card key={index}  className="flex border  gap-10 p-5 m-5">
                        <div className="p-5 shadow-md rounded-md bg-[#F7FEE7] flex items-center justify-center" >
                            {conteudoCard.icon}
                        </div>
                        <div className="flex flex-col gap-4 ">  
                            <CardTitle>
                                {conteudoCard.title}
                            </CardTitle>
                            <CardDescription>
                                {conteudoCard.description}
                            </CardDescription>
                        </div>
                    </Card>
                ))}
            </div> 
        </div>
    );
}