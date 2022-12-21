import React, { Suspense } from "react";

type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const Product = ({ CounterAppOne }: ContainerAppProps) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CounterAppOne />
      </Suspense>
    </div>
  );
};
