import { useState, Suspense } from "react";
import "./App.css";
import { FullScreenLoading } from "./components/libs";
import { RoutesConfig } from "./routes";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<FullScreenLoading />}>
        <RoutesConfig />
      </Suspense>
    </div>
  );
}

export default App;
