import { Text, View, Modal,TouchableOpacity, ActivityIndicator} from 'react-native';
import MapView, {  Marker  } from 'react-native-maps';

import {styles} from '../../../styles'
import { PointType, pointEnum } from '../../../src/commons/pointEnum';
import { Pointer } from '../../../src/components/Pointer';
import { useModal } from '../../../src/hooks/useModal';
import { ContentDetails } from '../../components/ContentDetails';
import styled from 'styled-components/native';
import { useLocation } from '../../context/locationContext';
import { MarkerUser } from '@/src/components/MarkerUser';
import { useEffect, useState } from 'react';
import { Gyroscope } from 'expo-sensors';

export default function MapScreen () {
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });
    const points = Object.values(pointEnum);
    const {isOpen, toggleModal} = useModal()

  const { mapRef, location } = useLocation();

  const [mapLoaded, setMapLoaded] = useState(false);

  const onMapLayout = () => {
    setMapLoaded(true);
  };

  useEffect(() => {
    // Subscribe to gyroscope data
    const subscription = Gyroscope.addListener(gyroscopeData => {
      setGyroscopeData(gyroscopeData);
    });

    // Set the update interval for the gyroscope data
    Gyroscope.setUpdateInterval(100);

    // Clean up the subscription on unmount
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      // Adjust the map's camera based on the gyroscope data
      const { x, y } = gyroscopeData;
      mapRef.current.animateCamera({
        heading: x * 100,  // Adjust this multiplier as needed
        pitch: y * 100,    // Adjust this multiplier as needed
      });
    }
  }, [gyroscopeData]);

  return (
    <View style={styles.container}>
      {!mapLoaded && (
        <ActivityIndicator
          size="large"
          color="#ED1B26"
          style={{
            position: 'absolute',
            top: '50%',
            alignSelf: 'center',
          }}
        />
      )}
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
      onLayout={onMapLayout}
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
        icon={require('../../../assets/images/user-icon156.png')}
      >
        <MarkerUser 
          name="Denny Erikson"
          type='Colaborador'
          school='NR - Santo Antonio do Pinhal'
        />
      </Marker> 

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
              icon={point.icon}
              >
            {point.slug !== "camping" &&
              <Pointer pointer={point}/>                 
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