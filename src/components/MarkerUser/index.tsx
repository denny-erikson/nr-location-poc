import { useLocation } from "@/src/context/locationContext"
import { CardPointer, ContentPointer, SubTitlePoint, TitlePoint } from "../Pointer/styles"
import { Callout } from "react-native-maps"
import { View } from "react-native"
import { formatTimestamp } from "@/src/utils/formatTimestamp"



interface MarkerUserProps {
    name: string
    type: string
    school: string
}
export const MarkerUser = ({name, type, school}:MarkerUserProps)=>{
    const {location} = useLocation()

    return (
        <Callout tooltip>
            <CardPointer>
                <ContentPointer style={{gap:4}} >
                    <TitlePoint>{name}</TitlePoint>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%"
                    }}>
                        <SubTitlePoint style={{fontSize: 9}}
                            >{type}</SubTitlePoint>
                        <SubTitlePoint style={{
                            fontSize: 9
                        }}>{formatTimestamp(location?.timestamp || 0)}</SubTitlePoint>
                    </View>
                    <SubTitlePoint style={{
                            fontSize: 9,
                            fontWeight: 500,
                        }}>{school}</SubTitlePoint>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <View style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: '#8DF8B8',
                            marginRight: 4,
                        }}/>
                        <SubTitlePoint style={{
                            fontSize:9
                        }}>{location?.coords.latitude}, {location?.coords.longitude}</SubTitlePoint>
                    </View>
                </ContentPointer>
            </CardPointer>
        </Callout>
    )
}