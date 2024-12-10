"use client";

import { ArrowRightIcon, HighlighterIcon, MailIcon, MessageSquare, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Form = () => {


  return (
    <form
      className="flex flex-col gap-y-4"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          placeholder="Name"
        />
        <User className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Input type="text" id="subject" placeholder="Subject"
        />
        <HighlighterIcon className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Textarea
          id="body"
          placeholder="Type your message here."
          className="min-h-48"
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      <Button
        type="submit"
        className="flex items-center gap-x-1 max-w-[166px]">
        Let&apos;s Talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
