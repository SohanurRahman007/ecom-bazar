import { Loader2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const ButtonLoading = ({
  type = "button",
  text,
  className,
  loading,
  onClick,
  ...props
}) => {
  return (
    <Button
      type={type}
      disabled={loading}
      className={cn("", className)}
      onClick={onClick}
      {...props}
    >
      {loading && <Loader2Icon className="animate-spin mr-2 h-4 w-4" />}
      {text}
    </Button>
  );
};

export default ButtonLoading;
