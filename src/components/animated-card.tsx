"use client";

import {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

interface MousePosition {
  x: number;
  y: number;
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: globalThis.MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

interface AnimatedContainerProps {
  children?: ReactNode;
  className?: any;
}

const AnimatedContainer = ({ children, className }: AnimatedContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

  useEffect(() => {
    init();
    containerRef.current &&
      setBoxes(
        Array.from(containerRef.current.children).map(
          (el) => el as HTMLElement,
        ),
      );
  }, []);

  useEffect(() => {
    init();
    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", init);
    };
  }, [setBoxes]);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition]);

  const init = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;

      mouse.current.x = x;
      mouse.current.y = y;
      boxes.forEach((box) => {
        const boxX =
          -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
        const boxY =
          -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
        box.style.setProperty("--mouse-x", `${boxX}px`);
        box.style.setProperty("--mouse-y", `${boxY}px`);

        if (inside) {
          box.style.setProperty("--opacity", `1`);
        } else {
          box.style.setProperty("--opacity", `0`);
        }
      });
    }
  };

  return (
    <div className={cn("h-full w-full", className)} ref={containerRef}>
      {children}
    </div>
  );
};

interface AnimatedCardProps {
  as?: ReactElement;
  className?: string;
  children?: ReactNode;
  size?: number;
  spotlight?: boolean;
  spotlightColor?: string;
  isolated?: boolean;
  background?: string;

  [key: string]: any;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  className,
  children,
  size = 300,
  // spotlight = true,
  borderColor = "hsl(0 0% 98%)",
  // isolated = true,
  ...props
}) => {
  return (
    <div
      style={
        {
          "--mask-size": `${size}px`,
          "--border-color": `${borderColor}`,
        } as CSSProperties
      }
      className={cn(
        "relative z-0 h-full w-full rounded-2xl p-6",
        "bg-gray-700",
        "bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),var(--sky-300)_0,var(--indigo-600)_50%,transparent_100%)]",
        className,
      )}
      {...props}
    >
      {children}

      {/* Background */}
      <div
        className={
          "absolute inset-[1px] -z-20 rounded-2xl bg-[#151515]"
        }
      />
    </div>
  );
};

export { AnimatedCard, AnimatedContainer };
