import { Text, View, Modal,TouchableOpacity, Image, ImageBackground} from 'react-native';
import MapView, {  Marker  } from 'react-native-maps';

import {styles} from '../../../styles'
import { PointType, pointEnum } from '../../../src/commons/pointEnum';
import { Pointer } from '../../../src/components/Pointer';
import { useModal } from '../../../src/hooks/useModal';
import { ContentDetails } from '../../components/ContentDetails';
import styled from 'styled-components/native';
import { useLocation } from '../../context/locationContext';
import { StyleSheet } from 'react-native';

export default function MapScreen () {
    const points = Object.values(pointEnum);
    const {isOpen, toggleModal} = useModal()

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
        icon={require('../../../assets/images/user-icon156.png')}
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
              icon={point.icon}
              >
            {point.slug !== "camping" &&
              <Pointer 
                slug={point.slug}
                name={point.name}
                category={point.category}
                description={point.description}
                imageUrl={point.imageUrl}
                location={point.location}
                icon={point.icon}
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

const styless = StyleSheet.create({
  image: {
    width: 56,
    height: 56,
    borderRadius: 56,
    resizeMode: 'cover',
    opacity: 0.5,
  },

  pointImage: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },

})