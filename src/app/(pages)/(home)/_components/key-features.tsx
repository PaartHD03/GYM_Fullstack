import { BicepsFlexedIcon, HistoryIcon, HourglassIcon, NutIcon, SquareSigmaIcon } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const KEY_FEATURES = [
  {
    title: "Effortless Workout Logging",
    description: "Track every workout with zero effort. Log exercises fast, stay organized, and crush your fitness journey with unmatched precision.",
    icon: HistoryIcon
  },
  {
    title: "Accurate Rep Counting",
    description: "No more counting on memory—count your reps with pinpoint accuracy. Stay consistent, push your limits, and never miss a beat.",
    icon: HourglassIcon
  },
  {
    title: "Calorie Calculation Made Easy",
    description: "Track every calorie burned like a beast. Get real-time insights on your energy output and stay fired up to hit your fitness goals.",
    icon: SquareSigmaIcon
  },
  {
    title: "Personalized Workout Plan",
    description: "AI-powered workouts that evolve with your body. Push harder, get stronger, and accelerate your results faster than ever before.",
    icon: BicepsFlexedIcon
  },
  {
    title: "Personalized Diet Plan",
    description: "Fuel your body like a machine with a custom AI diet plan. Tailored meals to match your goals, preferences, and lifestyle—because gains need the right fuel.",
    icon: NutIcon
  }
];

const KeyFeatures = () => {
  return (
    <section
      id="key-features"
      className="container"
    >
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Discover Our App&apos;s Key Features
      </h2>

      <h3 className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-8">
        GymFluencer is your ultimate fitness beast. Track your workouts, count your reps, and calculate calories with pinpoint precision. Whether you&apos;re just starting or pushing elite-level gains, this app fuels your grind and keeps you crushing goals like never before.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {KEY_FEATURES.map(({ title, icon: Icon, description }, i) => (
          <BlurFade
            key={i}
            inView
            once={false}
            delay={i * 0.15}
          >
            <Card
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </section >
  )
}

export default KeyFeatures