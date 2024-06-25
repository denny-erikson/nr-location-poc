import React, { createContext, useState, useContext, useEffect, ReactNode, useRef } from 'react';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import MapView, { LatLng } from 'react-native-maps';

const LOCATION_TASK_NAME = 'background-location-task';

interface DestinationContextProps {
  mapRef: React.RefObject<MapView>;
  location: Location.LocationObject | null;
  route: LatLng[];
  destination: LatLng | null;
  setNewDestination: (dest: LatLng) => void;
}

const DestinationContext = createContext<DestinationContextProps | undefined>(undefined);

export const DestinationContextProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [route, setRoute] = useState<LatLng[]>([]);
  const [destination, setDestination] = useState<LatLng | null>(null);
  const mapRef = useRef<MapView>(null);

  const startTracking = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }

    const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
    if (backgroundStatus !== 'granted') {
      console.error('Permission to access background location was denied');
      return;
    }

    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.BestForNavigation,
      timeInterval: 10000,
      distanceInterval: 50,
      foregroundService: {
        notificationTitle: 'Using your location',
        notificationBody: 'To turn off, go back to the app and stop the location tracking.',
      },
    });

    const currentPosition = await Location.getCurrentPositionAsync({});
    setLocation(currentPosition);
    setRoute((prevRoute) => [
      ...prevRoute,
      { latitude: currentPosition.coords.latitude, longitude: currentPosition.coords.longitude },
    ]);
  };

  useEffect(() => {
    TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
      if (error) {
        console.error(error);
        return;
      }
      if (data) {
        const { locations } = data as { locations: Location.LocationObject[] };
        setRoute((prevRoute) => [
          ...prevRoute,
          ...locations.map((loc) => ({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
          })),
        ]);
      }
    });
  }, []);

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
          timeInterval: 5000,
          distanceInterval: 50,
        },
        (response) => {
          setLocation(response);
          setRoute((prevRoute) => [
            ...prevRoute,
            { latitude: response.coords.latitude, longitude: response.coords.longitude },
          ]);
          mapRef.current?.animateCamera({
            pitch: 30,
            center: response.coords,
          });
          // console.log('Updated route:', route); // Debugging log
        }
      );
    };
    watchPosition();
  }, [route]);

  const setNewDestination = (dest: LatLng) => {
    setDestination(dest);
    setRoute([]);
    startTracking();
  };

  return (
    <DestinationContext.Provider value={{ mapRef, location, route, destination, setNewDestination }}>
      {children}
    </DestinationContext.Provider>
  );
};

export const useDestination = (): DestinationContextProps => {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error('useDestination must be used within a DestinationProvider');
  }
  return context;
};






