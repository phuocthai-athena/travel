import { useState, useRef, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TruncatedTextWithTooltip({
  children,
  className = "",
  maxLines = 1,
}) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      // Check if text is overflowing
      const isOverflow =
        element.scrollWidth > element.clientWidth ||
        element.scrollHeight > element.clientHeight;
      setIsOverflowing(isOverflow);
    }
  }, [children]);

  const content = (
    <div
      ref={textRef}
      className={`${className} ${
        maxLines === 1 ? "truncate" : `line-clamp-${maxLines}`
      }`}
    >
      {children}
    </div>
  );

  // If text is not overflowing, just return the content without tooltip
  if (!isOverflowing) {
    return content;
  }

  // If text is overflowing, wrap with Tooltip
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent
          className="max-w-xs bg-gray-900 text-white border-gray-900"
          side="top"
        >
          <p className="wrap-break-word">{children}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
