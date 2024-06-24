
import {  Text, TouchableHighlight, View } from 'react-native';
import MapView, { Callout, Marker,  } from 'react-native-maps';
import {
  requestForegroundPermissionsAsync, 
  getCurrentPositionAsync, 
  LocationObject,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location'
import {styles} from './styles'
import { useEffect, useRef, useState } from 'react';
import { PointEnumType, PointType, pointEnum } from './src/commons/pointEnum';
import {Point} from './src/components/Point'
import styled from 'styled-components/native';
import RoverImage  from './src/assets/images/rover-image.png'
import IconNavigation from './src/assets/icons/icon-navigation.svg'

export default function App() {
  const [location, setLocation] = useState<LocationObject | null>(null)
  const mapRef = useRef<MapView>(null)
  const points = Object.values(pointEnum);


  async function requestLocationPermissionsAsync(){
    const { granted } = await requestForegroundPermissionsAsync()
    if(granted){
      const currentPosition = await getCurrentPositionAsync()
      setLocation(currentPosition)
    }
  }

  useEffect(()=>{
    requestLocationPermissionsAsync()
  }, [])

  useEffect(()=>{
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response)=>{
      setLocation(response)
      mapRef.current?.animateCamera({
        pitch: 30,
        center: response.coords
      })
    })
  }, [])

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
              {point.slug !== "camping" && <Callout>
                  {/* <Point 
                    type='marker'
                    name={point.name}
                    category={point.category}
                    imageUrl={point.imageUrl}
                    location={[lat, long]}
                  /> */}

                  <CardPointer>
                    <ImagePointer source={RoverImage || {uri: point.imageUrl}} />
                    <ContentPointer>
                      <TitlePoint>{point.name}</TitlePoint>
                      <TitlePoint>{point.category}</TitlePoint>
                      <ButtonPointer>
                          <IconButtonPointer source={IconNavigation}/>
                          <TouchableHighlight onPress={()=>{}}>
                            <TextButtonPointer>Ver mais</TextButtonPointer>
                          </TouchableHighlight>
                      </ButtonPointer>
                    </ContentPointer>
                    
                  </CardPointer>
                </Callout>}
              </Marker>
          )})
        }
      </MapView>}
    </View>
  );
}


export const CardPointer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 4px;

  gap: 12px;
`

export const ImagePointer = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 46px;
`

export const TitlePoint = styled.Text`
  font-weight: bold;
  font-size:14px;
  color: #1B1D54;
`

export const ContentPointer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const ButtonPointer = styled.View`      
  align-items: center;
  justify-content: space-between;

  padding: 8px 6px;
`

export const TextButtonPointer = styled.Text`
  color: #2E3190;
  font-weight: bold;   

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
`

export const IconButtonPointer = styled.Image`
  margin-top: -5px;
  transform: rotate(27deg);
  height:16px;
  width: 16px;
  margin-right: 4px;
`




