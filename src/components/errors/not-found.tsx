import { cn } from "@/helpers/cn"

type Props = {
  className?: string
  title?: string
  description?: string
}

const NotFound = ({ description, title = "404", className = "The page you are looking for does not exist" }: Props) => {
  return (
    <div
      className={cn("flex flex-col items-center justify-center h-full space-y-4 w-full", className)}
    >
      <h1
        className="text-4xl font-bold text-center text-foreground"
      >{title}</h1>
      <p
        className="text-center text-muted-foreground"
      >{description}</p>
    </div>
  )
}

export default NotFound