import React, { Suspense } from "react";

export default function LazyLoading(Component) {
  return (props) => (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Component {...props} />
    </Suspense>
  );
}
