import { useState, Suspense } from "react";
import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import RoutesConfig from "./routes";

function App() {
  return (
    <div className="App">
      <Container>
        <Suspense fallback={<div>loading...</div>}>
          <RoutesConfig />
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
