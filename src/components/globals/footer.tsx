import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-6 mt-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <div className=" text-muted-foreground">
            Developed by <Link className="text-primary underline" href={"https://www.jrtilak.dev/"} target="_blank"> jrTilak.</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
