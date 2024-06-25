// import L from "leaflet";
import IconNavigation from '../../assets/icons/icon-navigation.svg'
import { CardProfile, Container } from "./styles";
import { useModal } from "../../hooks/useModal";
import { Image, Text, TouchableHighlight, View } from 'react-native';


// const itemMarker = new L.Icon({
//     iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/Image/marker-icon-2x-red.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//   });

interface PointProps {
    type: "profile" | "marker"
    name?: string
    category?:string
    imageUrl?: string
    location?: [
      number, number
    ],
    icon? : any
}

export const Point = ({name, category, imageUrl, location, type}: PointProps) =>{
    const {isOpen, toggleModal} = useModal()
    const locationString = location?.join(', ') || '';
    const cleanedLocationString = locationString.replace(/\d{6}$/, '...');

    if(type === "profile") return (
        <CardProfile>
            <Image source={{uri:imageUrl}} alt={`${name}`}/>
            <View>
                <Text>{name}</Text>
                <Text>Visitante</Text>
                <Text>NR School </Text>
                <View>
                    {/* <View className="dot"/> */}
                    {/* crie um regex para remover o numero de caracteres de location */}                   

                    <Text>{cleanedLocationString}</Text>
                </View>
            </View>
        </CardProfile>
    )
    return (
        <Container>            
            <Image source={{uri:imageUrl}} alt={`${name}`}/>
            <View>
                <Text>{name}</Text>
                <Text>{category}</Text>
                 <TouchableHighlight onPress={toggleModal}>
                    <Image source={IconNavigation}/> {` `}
                    Ir para {name}
                </TouchableHighlight>
            </View>
        </Container>
    )
}

