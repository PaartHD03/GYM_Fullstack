

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
          backgroundImage: "url(/images/jacked.jpg)",
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-60 z-10 backdrop-blur-[2px]"
        />
      </div>

      {/* content */}
      <div
        className="container flex items-center justify-center h-full w-full z-10 relative flex-col gap-5 text-center"
      >
        <h1
          className="text-3xl sm:text-5xl lg:text-7xl font-bold max-w-4xl"
        >
          Ready to rewrite your fitness story?
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Let&apos;s get started and turn those goals into unstoppable results. GymFluencer is built for the relentless, the grinders, and anyone ready to take their journey to beast mode.
        </p>
      </div>
    </section >
  )
}

export default HeroSection