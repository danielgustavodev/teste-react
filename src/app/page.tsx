import { Button } from "@/components/ui/button";
import {Card, CardDescription, CardTitle} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const conteudoCard = [
  {
    image: "../../papel.png",
    title: "Your call has been confirmed.",
    description: "We start by understanding your goals, challenges, and vision to create a roadmap.",
  },
  {
    image: "../../balde.png",
    title: "You have a new message!",
    description: "Our designers craft user-centric solutions, blending creativity with functionality.",
  },
  {
    image: "../../laptop.png",
    title: "Your subscription is expiring soon!",
    description: "Our developers bring designs to life with clean, scalable code.",
  },
  {
    image: "../../globo.png",
    title: "Your subscription is expiring soon!",
    description: "We test rigorously and launch your product, ensuring its ready for the market.",
  },
]

export default function Home() {
  return (
    <div  className=" h-screen flex justify-center items-center" >

      <div className=""> 
        <Button className="bg-white hover:bg-white border-2 text-black  p-2">Our Process</Button>
        <h1 className="">From Idea to Impact</h1>
        <span className="">We follow a streamlined approach to deliver exceptional digital products that exceed expectations.</span><br/><br/>
        <Button className="">Learn More</Button>
      </div>

       <div className="">
         {conteudoCard.map((conteudoCard, index) => (
           <Card key={index} className={cn("p-6")}>
            <img className='" p-5' src={conteudoCard.image}/>
           <CardTitle>
              {conteudoCard.title}
           </CardTitle>
            <CardDescription>
                {conteudoCard.description}
            </CardDescription>
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
