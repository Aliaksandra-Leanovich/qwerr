import FluidAnimation, {
  Animation,
  IAnimationConfig,
} from "@usertive/react-fluid-animation";
import "./style.css";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

export const Canvas = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const color = searchParams.get("color");
  let defaultColor = ["white"];
  if (color === "multi") {
    defaultColor = [
      "#FF1100",
      "#5D00FF",
      "#0043FF",
      "#0088FF",
      "#00DCFF",
      "#00FFF7",
      "#00FFD4",
      "#FFFFFF",
    ];
  } else {
    defaultColor = [color!];
  }

  const defaultConfig: Partial<IAnimationConfig> = {
    textureDownsample: 1,
    densityDissipation: 0.98,
    velocityDissipation: 0.99,
    pressureDissipation: 0.8,
    pressureIterations: 25,
    curl: 30,
    splatRadius: 0.005,
    colorsPool: defaultColor,
  };

  const animationRef = useRef<Animation | null>(null);

  return (
    <div className="root1">
      <FluidAnimation
        config={defaultConfig}
        animationRef={(animation) => (animationRef.current = animation)}
      />
    </div>
  );
};
