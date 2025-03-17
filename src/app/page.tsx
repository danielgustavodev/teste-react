import { Button } from "@/components/ui/button";
import {Card, CardDescription, CardTitle} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const conteudoCard = [
    {
      image: "../../papel.png",
      title: "Discover.",
      description: "We start by understanding your goals, challenges, and vision to create a roadmap.",
    },
    {
      image: "../../balde.png",
      title: "Design",
      description: "Our designers craft user-centric solutions, blending creativity with functionality.",
    },
    {
      image: "../../laptop.png",
      title: "Develop",
      description: "Our developers bring designs to life with clean, scalable code.",
    },
    {
      image: "../../globo.png",
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
                <Button className="m-5">Learn More ↗</Button>
            </div>
            <div className="">
                {conteudoCard.map((conteudoCard, index) => (
                    <Card key={index}  className="flex border  gap-10 p-5 m-5">
                        <img className='p-5 h-24 shadow-md rounded-md bg-gray-50 justify-center' src={conteudoCard.image}/>
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

type CardProps = React.ComponentProps<typeof Card>
export function CardDemo({ className, ...props }: CardProps) {
    return (
        <Card>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
            <div>
                {conteudoCard.map((conteudoCard, index) => (
                    <div key={index} className="">
                        <div className="">
                            <p className="">
                                {conteudoCard.title}
                            </p>
                            <p className="">
                                {conteudoCard.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
