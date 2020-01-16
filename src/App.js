import React from "react";
import "./components/style/style.css";
// components
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Instructions } from "./components/Instructions";
// context
import { TargetListProvider } from "./components/TargetList";
import { DataProvider } from "./components/Data";

function App() {
  return (
    <DataProvider>
      <TargetListProvider>
        <div className="App">
          <Instructions />
          <Header />
          <Container />
          <Footer />
        </div>
      </TargetListProvider>
    </DataProvider>
  );
}

export default App;
