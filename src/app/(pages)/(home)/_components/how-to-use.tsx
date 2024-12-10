import Image from "next/image";

import { BlurFade } from "@/components/ui/blur-fade";

const STEPS = [
  {
    title: "Open the App and Get Ready to Dominate",
    description: "Launch GymFluencer, and boom! You're greeted with an ultra-intuitive home screen that puts every feature at your fingertips. No distractions—just pure fitness power.",
    image: "/images/step-1.avif"
  },
  {
    title: "Log Your Exercises Like a Beast",
    description: "Pick your exercises and log them in seconds. Whether it's squats, deadlifts, or cardio, get it down fast and start tracking your epic progress.",
    image: "/images/step-2.avif"
  },
  {
    title: "Crush Your Rep Counting",
    description: "Count your reps like a pro—no more guesswork. Every rep tracked with laser precision so you stay consistent, crush your performance, and break your personal best.",
    image: "/images/step-3.webp"
  },
  {
    title: "Track Your Progress and Smash Goals",
    description: "See your stats in real time and watch those gains pile up. Stay hungry, track your progress, and keep pushing forward like a true fitness warrior.",
    image: "/images/step-4.webp"
  },
  {
    title: "Review Your Gains and Keep Crushing It",
    description: "Take a moment to admire your progress. Workout summaries show just how much you've crushed it. Stay motivated, keep leveling up, and leave limits in the dust.",
    image: "/images/step-5.jpg"
  }
];

const HowToUse = () => {
  return (
    <section
      id="how-to-use"
      className="container"
    >
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Unleash Your Beast Mode with GymFluencer
      </h2>

      <h3 className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-8">
        Ready to crush it? Follow these simple steps to unlock your true fitness potential and take your workouts to the next level. With GymFluencer, you&apos;re not just working out—you&apos;re dominating every rep, every set, and every goal.
      </h3>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {
          STEPS.map(({ title, description, image }, index) => {
            return (
              <BlurFade
                key={index}
                inView
                once={false}
                delay={index * 0.1}
                offset={{ y: 0, x: index % 2 === 0 ? 12 : -12 }}
                className="md:col-span-2"
              >
                {
                  index % 2 === 0 ? (
                    <div className="flex flex-col text-clip rounded-xl border border-border md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                      <div className="md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem]">
                        <Image
                          src={image}
                          alt={title}
                          className="aspect-[16/9] size-full object-cover object-center rounded-r-xl opacity-60"
                          width={1000}
                          height={1000}
                          quality={100}
                        />
                      </div>
                      <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                        <h3 className="mb-3 text-3xl font-semibold md:mb-4 md:text-2xl lg:mb-6">
                          <span className="text-muted-foreground font-medium text-lg">
                            Step {index + 1}
                          </span>
                          <br />
                          {title}
                        </h3>
                        <p className="text-muted-foreground lg:text-lg">
                          {description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="flex flex-col-reverse text-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8" >
                      <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                        <h3 className="mb-3 text-3xl font-semibold md:mb-4 md:text-2xl lg:mb-6">
                          <span className="text-muted-foreground font-medium text-lg">
                            Step {index + 1}
                          </span>
                          <br />
                          {title}
                        </h3>
                        <p className="text-muted-foreground lg:text-lg">
                          {description}
                        </p>
                      </div>
                      <div className="md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem]">
                        <Image
                          src={image}
                          alt={title}
                          className="aspect-[16/9] size-full object-cover object-center rounded-l-xl opacity-60"
                          width={1000}
                          height={1000}
                          quality={100}
                        />
                      </div>
                    </div>
                  )
                }
              </BlurFade>
            )
          })
        }
      </div>
    </section >
  )
}

export default HowToUse