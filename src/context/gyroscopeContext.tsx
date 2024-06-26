import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Gyroscope } from 'expo-sensors';
import { useLocation } from "./locationContext";


interface GyroscopeContextProps {
    gyroscopeData: { x: number, y: number, z: number }
    smoothedGyroscopeData: React.MutableRefObject<{
        x: number;
        y: number;
        z: number;
    }>
    isGyroscopeEnabled: boolean
    setIsGyroscopeEnabled: () => void
}

export const GyroscopeContext = createContext<GyroscopeContextProps | undefined>(undefined)


interface GyroscopeContextProviderProps {
    children: React.ReactNode
}

export const GyroscopeContextProvider = ({children}:GyroscopeContextProviderProps)=>{
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });
  const [isGyroscopeEnabled, setIsGyroscopeEnabled] = useState(true);
  const smoothedGyroscopeData = useRef({ x: 0, y: 0, z: 0 });
//   const {mapRef} = useLocation()

  const SMOOTHINGFACTOR = 0.3; 

  useEffect(() => {
    let subscription: any;
    if (isGyroscopeEnabled) {
      subscription = Gyroscope.addListener(gyroscopeData => {
        setGyroscopeData(gyroscopeData);
      });

      Gyroscope.setUpdateInterval(100);
    }

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [isGyroscopeEnabled]);


    return ( 
        <GyroscopeContext.Provider value={{
            gyroscopeData,
            smoothedGyroscopeData,
            isGyroscopeEnabled,
            setIsGyroscopeEnabled: ()=> setIsGyroscopeEnabled(!isGyroscopeEnabled),
        }}>
            {children}
        </GyroscopeContext.Provider>
    )
}

export const useGyroscope = (): GyroscopeContextProps => {
    const context = useContext(GyroscopeContext);
    if (!context) {
      throw new Error('useGyroscope must be used within a GyroscopeProvider');
    }
    return context;
  };
  