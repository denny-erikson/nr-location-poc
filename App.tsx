import React from "react";
import { FilterPointContextProvider } from "./src/context/filterPointContext";
import { LocationContextProvider } from "./src/context/locationContext";
import { ModalContextProvider } from "./src/context/modalContext";
import MapScreen from "./src/screens/MapScreen";
import { GyroscopeContextProvider } from "./src/context/gyroscopeContext";



export default function App() { 

  return (
    <ModalContextProvider>
      <LocationContextProvider>
        <GyroscopeContextProvider>
          <FilterPointContextProvider>
            <MapScreen />
          </FilterPointContextProvider>
        </GyroscopeContextProvider>
      </LocationContextProvider>
    </ModalContextProvider>
  );
}




