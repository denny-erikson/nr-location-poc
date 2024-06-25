import {Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { pointEnum } from '../../commons/pointEnum';
import { useModal } from '../../hooks/useModal';
import { useFilterPoint } from '../../hooks/useFilterPoint';
import { calculateDistanceAndTime } from '../../utils/calculateDistanceAndTime';
import { useLocation } from '../../context/locationContext';
import MapView, { Marker } from 'react-native-maps';


export const ContentDetails = () => {
  const { location } = useLocation();
  const {toggleModal} = useModal()
  const {point} = useFilterPoint()
  const points = Object.values(pointEnum);
  const images = [
    points[0].imageUrl,
    points[0].imageUrl,
    points[0].imageUrl,
  ];
  
  const { distanceMeters, timeMinutes } = calculateDistanceAndTime([
    location?.coords.latitude || 0,
    location?.coords.longitude || 0
  ], point?.location || [0, 0]);


  const handleStartNavigation = () => {
    if (point) {
    const destination = { latitude: point?.location[0], longitude: point?.location[1] }; // Exemplo de coordenadas de São Paulo
      // setNewDestination(destination);
      toggleModal()
    }
  };

  const initialCamera = {
    zoom: 17,
    center: {
      latitude: point?.location[0] || 0,
      longitude: point?.location[1] || 0,
    },
    pitch: 30
  };

  return (
    <CardContentDetails>        
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          {/* <Image style={styles.image} source={require("../../../assets/images/rover-image.png")} />
          <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
          <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} /> */}
        </ScrollView>
      </View>

      <Image style={styles.image} source={require('../../../assets/images/rover-image.png')} />
      <Image style={styles.image} source={{ uri: point?.imageUrl }} />

      <View style={{ paddingHorizontal: 20}}>
      <View style={{
        justifyContent: 'space-between',
        paddingVertical: 16,
        gap: 16
      }}>            
        <TitleCardContent>{point?.name}</TitleCardContent>
        <TextCardContent>{point?.category}</TextCardContent>
        <TextCardContent>{point?.description}</TextCardContent>
      </View>
      <View
        style={{
          borderBottomColor: '#f2f2fa',
          borderBottomWidth: 1,
          width: "100%",
          marginBottom:16,
        }}
      />

      <CardDistance>
        <IconDistence source={""} alt='icon'/>
        <TextDistance>{`A ${distanceMeters} metros, aproximadamente ${timeMinutes} minutos`}</TextDistance>
      </CardDistance>


      <ContainerPosition>
        <MapContainer>
          <MapView 
              initialRegion={{
                latitude: point?.location[0]  || 0,
                longitude: point?.location[1] || 0,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
              }} 
              // zoomEnabled={false}
              pitchEnabled={false}
              scrollEnabled={false}
              rotateEnabled={false}
              // zoomControlEnabled={false}
              mapType='satellite'
              style={styles.mapStyle}
              initialCamera={{
                zoom: 20,
                center: {
                  latitude: point?.location[0] || 0,
                  longitude: point?.location[1] || 0,
                },
                pitch: 0,
                heading: 0 
              }}
            >
              <Marker 
                // icon={mapMarkerImg}
                coordinate={{ 
                  latitude: point?.location[0]  || 0,
                  longitude: point?.location[1] || 0,
                }}
              />
            </MapView>
        </MapContainer>
        <ButtonMap onPress={handleStartNavigation}>
          <TextMap>Ver rota para HoverBoard</TextMap>
        </ButtonMap>
      </ContainerPosition>
      </View>
    </CardContentDetails>
  );
};

export const ContainerPosition = styled.View`
    position:relative;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #B3DAE2;
    margin-bottom:48px;


    min-width: 100%;
    height: 210px;

    margin-top:24px;
    border-radius: 24px;
    background-color: #E6F7FB;
`

export const ButtonMap = styled(TouchableOpacity)`
  all: unset;
  margin-bottom: 16px;

`
export const TextMap = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #2E3190;
`
export const MapContainer = styled.View`
  /* position: absolute;
  top:0;
  left:0; */
  width: 100%;
  height: 160px;
  border-radius: 24px;
  
`

export const CardContentDetails = styled.View`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content: flex-start;

  margin-top: 32px;
  padding: 24px 0;
`
export const TitleCardContent = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color:#4F4F54; 
`
export const TextCardContent = styled.Text`
  font-size:16px;
  text-align: left;
  margin-top: -8px;
  color:#9797A1;
`

export const CardDistance = styled.View`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: flex-start;
  width: 100%;

  gap: 8px;

`
export const TextDistance = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color:#C6C6D3;
  white-space: nowrap;
`

export const IconDistence = styled.Image`
  width: 26px;
  height: 26px;

  border-radius: 26px;
  background-color: #f2f2fa;
` 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
    backgroundColor: "#fafaf2",
    borderColor: "#fafaf2",
    borderWidth: 1,
  },

  image: {
    width: "100%",
    height: 240,
    resizeMode: 'cover',
  },

  mapStyle: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})