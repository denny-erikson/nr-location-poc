import React, { createContext, useState, useContext, useEffect, ReactNode, useRef } from 'react';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import MapView, { LatLng } from 'react-native-maps';

const LOCATION_TASK_NAME = 'background-location-task';

interface LocationContextProps {
  mapRef: React.RefObject<MapView>;
  location: Location.LocationObject | null;
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined);

export const LocationContextProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const mapRef = useRef<MapView>(null);


  const requestLocationPermissionsAsync = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (granted) {
      const currentPosition = await Location.getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  };

  useEffect(() => {
    requestLocationPermissionsAsync();
  }, []);

  useEffect(() => {
    const watchPosition = async () => {
      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 3000,
          distanceInterval: 3,
        },
        (response) => {
          setLocation(response);
          mapRef.current?.animateCamera({
            pitch: 30,
            center: response.coords,
          });
        }
      );
    };
    watchPosition();
  }, []);


  return (
    <LocationContext.Provider value={{ mapRef, location  }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextProps => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
