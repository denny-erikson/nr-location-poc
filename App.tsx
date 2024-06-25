import { FilterPointContextProvider } from "./src/context/filterPointContext";
import { ModalContextProvider } from "./src/context/modalContext";
import MapScreen from "./src/screens/MapScreen";



export default function App() { 

  return (
    <ModalContextProvider>
      <FilterPointContextProvider>
        <MapScreen />
      </FilterPointContextProvider>
    </ModalContextProvider>
  );
}




