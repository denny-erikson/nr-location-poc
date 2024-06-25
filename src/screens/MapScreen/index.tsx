import { Text, View, Modal, Button, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import MapView, { Callout, Marker, Polyline,  } from 'react-native-maps';
import {
  requestForegroundPermissionsAsync, 
  getCurrentPositionAsync, 
  LocationObject,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location'
import {styles} from '../../../styles'
import { useEffect, useRef, useState } from 'react';
import { PointType, pointEnum } from '../../../src/commons/pointEnum';
import { Pointer } from '../../../src/components/Pointer';
import { useModal } from '../../../src/hooks/useModal';
import { ContentDetails } from '../../components/ContentDetails';
import styled from 'styled-components/native';
import { useLocation } from '../../context/locationContext';

export default function MapScreen () {
    // const [location, setLocation] = useState<LocationObject | null>(null)
    // const mapRef = useRef<MapView>(null)
    const points = Object.values(pointEnum);
    const {isOpen, toggleModal} = useModal()


  // async function requestLocationPermissionsAsync(){
  //   const { granted } = await requestForegroundPermissionsAsync()
  //   if(granted){
  //     const currentPosition = await getCurrentPositionAsync()
  //     setLocation(currentPosition)
  //   }
  // }

  // useEffect(()=>{
  //   requestLocationPermissionsAsync()
  // }, [])

  // useEffect(()=>{
  //   watchPositionAsync({
  //     accuracy: LocationAccuracy.Highest,
  //     timeInterval: 1000,
  //     distanceInterval: 1
  //   }, (response)=>{
  //     setLocation(response)
  //     mapRef.current?.animateCamera({
  //       pitch: 30,
  //       center: response.coords
  //     })
  //   })
  // }, [])

  const { mapRef, location } = useLocation();

  return (
    <View style={styles.container}>
    {location && 
    <MapView 
      ref={mapRef}
      style={styles.map}
      initialRegion={{
        latitude:location.coords.latitude,
        longitude:location.coords.longitude,
        latitudeDelta:0.005,
        longitudeDelta:0.005,
      }}
      mapType='satellite'
    >
      {/* {location && route.length > 0 &&  <Polyline
        coordinates={route}
        strokeColor="#ff0000"
        strokeWidth={3}
      />} */}
      <Marker 
        coordinate={{
          latitude:location.coords.latitude,
          longitude:location.coords.longitude,
        }}
      />  

      {
        points.map((point: PointType)=> { 
          const [lat, long] = point.location
          return (
            <Marker 
              key={point.name} 
              coordinate={{
                latitude:lat,
                longitude:long,
              }}
              >
            {point.slug !== "camping" && 
              <Pointer 
                slug={point.slug}
                name={point.name}
                category={point.category}
                description={point.description}
                imageUrl={point.imageUrl}
                location={point.location}
              />                
            }
            </Marker>
        )})
      }
    </MapView>}

    
    <Modal animationType="fade" visible={isOpen}>
        <ButtonClosedModal onPress={toggleModal}>
            <Text>&#x2715;</Text>
        </ButtonClosedModal>
        <ContentDetails/>
    </Modal>
  </View>
  )
}

export const ButtonClosedModal = styled(TouchableOpacity)`
    position: absolute;
    top: 24px;
    right: 24px;

    width: 32px;
    height: 32px;

    background-color: #fafaf2;
    border: none;
    border-radius: 32px;

    color: #777;

    flex:1;
    align-items: center;
    justify-content: center

`