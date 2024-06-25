import React from "react";
import { FilterPointContextProvider } from "./src/context/filterPointContext";
import { LocationContextProvider } from "./src/context/locationContext";
import { ModalContextProvider } from "./src/context/modalContext";
import MapScreen from "./src/screens/MapScreen";



export default function App() { 

  return (
    <ModalContextProvider>
      <LocationContextProvider>
        <FilterPointContextProvider>
          <MapScreen />
        </FilterPointContextProvider>
      </LocationContextProvider>
    </ModalContextProvider>
  );
}




