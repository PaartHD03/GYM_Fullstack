import { PlusIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/ui/blur-fade";


const FAQS = [
  {
    question: "Is GymFluencer free to use?",
    answer: "Yes, GymFluencer is free to get started. No excuses, just gains.",
  },
  {
    question: "How accurate is the rep counting?",
    answer:
      "Our app counts reps with surgical precision. No more guessing—just track, lift, repeat!",
  },
  {
    question: "Can beginners use GymFluencer?",
    answer:
      "Absolutely! GymFluencer adapts to all fitness levels, helping you progress whether you're just starting or crushing advanced goals.",
  },
  {
    question: "How does the personalized workout plan work?",
    answer:
      "We use AI to create a workout plan tailored to your fitness level, goals, and progress. It's like having a personal trainer 24/7.",
  },
  {
    question: "Can I track my calories burned?",
    answer:
      "Yes! GymFluencer tracks your calories burned so you can fuel your fitness journey with data-backed precision.",
  },
];

export const FAQSection = () => {
  return (
    <BlurFade inView inViewMargin='60px' once={false} delay={0.2}>
      <section id="faqs" className="container">
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            FAQS
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Got Questions? We&apos;ve Got Answers
          </h2>
        </div>

        <Accordion type="single" collapsible className="md:w-[700px] mx-auto space-y-3" variant="secondary"
          triggerIcon={
            <PlusIcon className="h-4 w-4 shrink-0 transition-transform duration-200 " />
          }>
          {FAQS.map(({ question, answer }, i) => (
            <AccordionItem key={i} value={i.toString()}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </BlurFade>
  );
};