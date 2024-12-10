import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
import { Metadata } from "next";

import INFO from "@/constants/info";

import Form from "./_components/form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Text & Illustration */}
        <div className="grid xl:grid-cols-2 pt-12">
          {/* text  */}
          <div className="flex flex-col justify-center ">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Let&apos;s Crush It Together! 💪
            </div>
            <h1 className="h1 max-w-md mb-8">Ready to Transform Your Fitness?</h1>
            <p className="subtitle !text-left max-w-[400px]">
              Whether you&apos;re looking for advice, support, or collaboration, we&apos;re here to flex with you. Drop us an email, give us a call, or connect through social media. Let&apos;s power up your fitness journey today!
            </p>

            <div className="flex flex-col gap-y-4 my-12 xl:mb-24 text-base xl:text-lg">
              {/* mail  */}
              <div className="flex items-center gap-x-8">
                <MailIcon size={18} className="text-primary" />
                <div>
                  {INFO.email}
                </div>
              </div>
              {/* address  */}
              <div className="flex items-center gap-x-8">
                <HomeIcon size={18} className="text-primary" />
                <div>
                  {INFO.address}
                </div>
              </div>
              {/* phone  */}
              <div className="flex items-center gap-x-8">
                <PhoneCall size={18} className="text-primary" />
                <div>
                  {INFO.phone}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-32 xl:mt-32">
            <Form />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;

export const metadata: Metadata = {
  title: "Contact"
}