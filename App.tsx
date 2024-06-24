
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
import images from './src/commons/imges'
import { Pointer } from './src/components/Pointer';

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
              {point.slug !== "camping" && 

              <Pointer 
                slug={point.slug}
                name={point.name}
                category={point.category}
                imageUrl={point.imageUrl}
                location={point.location}
              />

              // <CalloutPointer            
              //   tooltip
              //   onPress={()=>{
              //               console.log("[VER MAIS]: ", point.name)
              //             }}>
              //     {/* <Point 
              //       type='marker'
              //       name={point.name}
              //       category={point.category}
              //       imageUrl={point.imageUrl}
              //       location={[lat, long]}
              //     /> */}

              //     <CardPointer>
              //       <ImagePointer source={images.rover} />
              //       <ContentPointer>
              //         <TitlePoint>{point.name}</TitlePoint>
              //         <SubTitlePoint>{point.category}</SubTitlePoint>
              //         <ButtonPointer>
              //             <IconButtonPointer source={require('./src/assets/icons/icon-navigation.svg')}/>
              //             <TouchableHighlight onPress={()=>{
              //               console.log("[VER MAIS]: ", point.name)
              //             }}>
              //               <TextButtonPointer>Ver mais</TextButtonPointer>
              //             </TouchableHighlight>
              //         </ButtonPointer>
              //       </ContentPointer>
                    
              //     </CardPointer>
              //     <SplotCalloutPointer />
              //   </CalloutPointer>
                
                }
              </Marker>
          )})
        }
      </MapView>}
    </View>
  );
}

export const SplotCalloutPointer = styled.View`
  position: absolute;
  bottom: -30px;
  left: 50%;
  right: 50%;
  transform: translateX(-15px); /* Ajuste para centralizar */
  width: 30px;
  height: 30px;
  background-color: red;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`
export const CalloutPointer = styled(Callout)`
  flex:1;
  justify-content: center;
  align-items: center;
  `

export const CardPointer = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #fff;

  border-radius: 20px;
  padding: 12px; 

  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
  elevation: 5;

`

export const ImagePointer = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 46px;
  border: 1px solid #333;
  margin-right: 8px;
`

export const TitlePoint = styled.Text`
  font-weight: bold;
  font-size:16px;
  color: #1B1D54;
`

export const SubTitlePoint = styled.Text`
  font-weight: 300;
  font-size:12px;
  color: #717178;
`

export const ContentPointer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const ButtonPointer = styled.View`   
  flex:1;   
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 0 6px;
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




