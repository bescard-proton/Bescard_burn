import { type FC, type ReactNode, useEffect, useState } from "react";

type Position = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

type PathControl = Partial<Position> & {
  radius: number;
  deg: number;
  directionDegs: [number, number];
};

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = Point.process(x);
    this.y = Point.process(y);
  }

  private static process(value: number) {
    const nextValue = Math.max(0, value);
    return Math.floor(nextValue * 10000) / 10000;
  }
}

function calculateArc(
  radius: number,
  tangent: Point,
  tangentDeg: number,
  tangentDirection: [number, number],
): { center: Point; E1: Point; E2: Point } {
  const tangentRad = (tangentDeg / 180) * Math.PI;
  const tangentHalfRad = tangentRad / 2;
  const dOP = radius / Math.sin(tangentHalfRad);

  const rad1 = (tangentDirection[0] / 180) * Math.PI;
  const rad2 = (tangentDirection[1] / 180) * Math.PI;
  const middle = (rad1 + rad2) / 2;

  const center: Point = {
    x: Math.floor(tangent.x + dOP * Math.cos(middle)),
    y: Math.floor(tangent.y + dOP * Math.sin(middle)),
  };

  const length = radius / Math.tan(tangentHalfRad);
  const E1 = new Point(tangent.x + length * Math.cos(rad1), tangent.y + length * Math.sin(rad1));
  const E2 = new Point(tangent.x + length * Math.cos(rad2), tangent.y + length * Math.sin(rad2));

  return { center, E1, E2 };
}

function makeSVG(
  controls: PathControl[],
  width: number,
  height: number,
  stroke: string,
  strokeWidth: number,
  fill = "white",
) {
  let path = "";

  controls.forEach((control, index) => {
    const { radius, deg, directionDegs } = control;
    const tangent = {
      x: "left" in control ? control.left! + strokeWidth / 2 : width - control.right! - strokeWidth / 2,
      y: "top" in control ? control.top! + strokeWidth / 2 : height - control.bottom! - strokeWidth / 2,
    };
    const { E1, E2 } = calculateArc(radius, tangent, deg, directionDegs);

    if (index === 0) {
      path += `M ${E1.x} ${E1.y} C ${E1.x} ${E1.y}, ${tangent.x} ${tangent.y}, ${E2.x} ${E2.y} `;
      return;
    }

    path += `L ${E1.x} ${E1.y} C ${E1.x} ${E1.y}, ${tangent.x} ${tangent.y}, ${E2.x} ${E2.y} `;
  });

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <path d="${path} Z" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
}

type ViewBoxProps = {
  controls: PathControl[];
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  className?: string;
  children?: ReactNode;
  extraBackgrounds?: string[];
};

export const pxIdentity = (value: number) => value;

const MintpadViewBox: FC<ViewBoxProps> = ({
  children,
  className,
  controls,
  stroke = "#1A1A1A",
  strokeWidth = 6,
  fill,
  extraBackgrounds = [],
}) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<DOMRectReadOnly>();
  const [bg, setBg] = useState<string>();

  useEffect(() => {
    if (!container) {
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      setRect(entry.contentRect);
    });
    observer.observe(container);

    return () => observer.disconnect();
  }, [container]);

  useEffect(() => {
    if (!rect) {
      return;
    }

    setBg(makeSVG(controls, rect.width, rect.height, stroke, strokeWidth, fill));
  }, [rect, controls, stroke, strokeWidth, fill]);

  return (
    <div
      ref={setContainer}
      className={className}
      style={{
        background: [...extraBackgrounds, `url("${bg}") no-repeat`].join(","),
      }}
    >
      {children}
    </div>
  );
};

export default MintpadViewBox;
