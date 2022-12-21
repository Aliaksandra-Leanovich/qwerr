import React, { Suspense } from "react";

type ContainerAppProps = {
  CounterAppTwo: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const Services = ({ CounterAppTwo }: ContainerAppProps) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CounterAppTwo />
      </Suspense>
    </div>
  );
};
