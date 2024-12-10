import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"

const HeroSection = () => {
  return (
    <section
      className="h-dvh w-screen relative"
      id="hero"
    >
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30 z-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/gym.png)",
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-60 z-10 backdrop-blur-[2px]"
        />
      </div>

      {/* content */}
      <div
        className="container flex items-center justify-end h-full pb-4 z-10 relative flex-col gap-5 text-center"
      >
        <Button size={"lg"} className="min-w-40" variant={"destructive"}>
          <span> Crush It Today</span>
          <ArrowRightIcon className="size-5" />
        </Button>
        <h1
          className="text-3xl sm:text-5xl lg:text-7xl font-bold"
        >
          Dominate Every  <FlipWords words={["Rep", "Set", "Goal"]} duration={1200} />
        </h1>
        <p className="text-muted-foreground max-w-3xl">Supercharge your workouts. Master your diet. Dominate your fitness goals. GymFluencer puts peak performance in your pocket.</p>
      </div>
    </section>
  )
}

export default HeroSection