import React, { Suspense } from "react";

type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const Product = ({ CounterAppOne }: ContainerAppProps) => {
  return <div></div>;
};
