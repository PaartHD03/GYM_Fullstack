import { useEffect, useState } from "react";

const useScrollProgress = (): number => {
  const [completion, setCompletion] = useState<number>(1);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    // Event Listener
    window.addEventListener("scroll", updateScrollCompletion);

    // Cleanup
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
