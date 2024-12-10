"use client";
import NextTopLoader from "nextjs-toploader";


const TopLoader = () => {
  return (
    <NextTopLoader
      color="#6DB657"
      initialPosition={0.08}
      crawlSpeed={200}
      height={4}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #6DB657,0 0 5px #6DB657"
      zIndex={1600}
    />
  );
};

export default TopLoader;