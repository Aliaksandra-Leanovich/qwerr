import FluidAnimation, {
  Animation,
  IAnimationConfig,
} from "@usertive/react-fluid-animation";
import "./style.css";

import { useCallback, useRef, useState } from "react";

const defaultConfig: Partial<IAnimationConfig> = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005,
  colorsPool: [
    // "#FF1100",
    // "#FF0046",
    // "#5D00FF",
    // "#0043FF",
    // "#0088FF",
    // "#00DCFF",
    // "#00FFF7",
    // "#00FFD4",
    // "#00FFA2",
    "#DADADA",
    "#FFFFFF",
  ],
};

export const Canvas = ({ children }: any) => {
  const [config, setConfig] = useState<Partial<IAnimationConfig>>({
    ...defaultConfig,
  });
  const animationRef = useRef<Animation | null>(null);

  const updateConfig = useCallback(
    (newConfig: Partial<IAnimationConfig>) =>
      setConfig({ ...config, ...newConfig }),
    [config, setConfig]
  );
  const resetConfig = useCallback(
    () => setConfig({ ...defaultConfig }),
    [setConfig]
  );
  const makeRandomSplats = useCallback(() => {
    animationRef.current?.addRandomSplats((5 + Math.random() * 20) | 0);
  }, [animationRef]);

  return (
    <div className="root1">
      <FluidAnimation
        config={defaultConfig}
        style={{ backgroundColor: "#fff" }}
        animationRef={(animation) => (animationRef.current = animation)}
      />
      <div className="overlay">{children}</div>
      {/* <GUI
        config={config}
        updateConfig={updateConfig}
        resetConfig={resetConfig}
        makeRandomSplats={makeRandomSplats}
      /> */}
    </div>
  );
};
