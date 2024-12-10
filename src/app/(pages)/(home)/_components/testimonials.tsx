"use client";
import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const REVIEWS = [
  {
    image: "/images/avatar.avif",
    name: "John Doe",
    userName: "Product Manager",
    comment:
      "Holy gains! This app is like having a personal trainer in your pocket. The way it tracks reps and calories is next level. I'm smashing my workouts like never before!",
    rating: 5.0,
  },
  {
    image: "/images/avatar.avif",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "I'm pumped! The custom workout logging is insane. The rep counting feature is so accurate—my form's never been better, and my progress has skyrocketed.",
    rating: 4.8,
  },
  {
    image: "/images/avatar.avif",
    name: "Adam Johnson",
    userName: "Chief Technology Officer",
    comment:
      "This app is a game-changer. It tracks every rep with surgical precision. No more guessing—I can see my progress with every session. Feeling stronger every day!",
    rating: 4.9,
  },
  {
    image: "/images/avatar.avif",
    name: "Ethan Parker",
    userName: "Data Scientist",
    comment:
      "I've tried all the fitness apps, but nothing gets me as hyped as this one. The progress tracking is unreal, and I love seeing those numbers go up as I push my limits.",
    rating: 5.0,
  },
  {
    image: "/images/avatar.avif",
    name: "Ava Mitchell",
    userName: "IT Project Manager",
    comment:
      "This app fuels my workout intensity! The personalized plans are so spot-on, and tracking calories burned has never been so easy. It's like having a gym partner who knows exactly what I need.",
    rating: 5.0,
  },
  {
    image: "/images/avatar.avif",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "Every gym junkie needs this app. It tracks my sets, reps, and calories with insane accuracy. I've never felt more in control of my fitness journey. I'm crushing goals left and right!",
    rating: 4.9,
  },
];



const Testimonials = () => {
  return (
    <section id="testimonials" className="container">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Real Gains, Real Stories
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {REVIEWS.map((review, i) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3"
              key={review.name}
            >
              <BlurFade
                inView once={false} delay={i * 0.05}>
                <Card className="bg-muted/50 dark:bg-card select-none">
                  <CardContent className="pt-6 pb-0">
                    <div className="flex gap-1 pb-6">
                      {
                        Array.from({ length: review.rating }).map((i) => {
                          return <Star key={i as number} className="size-4 fill-primary text-primary" />
                        })
                      }
                    </div>
                    {`"${review.comment}"`}
                  </CardContent>

                  <CardHeader>
                    <div className="flex flex-row items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={review.image}
                        />
                        <AvatarFallback className="uppercase">
                          {review.name.split(" ").map((n) => n.charAt(0))}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col">
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <CardDescription>{review.userName}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </BlurFade>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Testimonials;