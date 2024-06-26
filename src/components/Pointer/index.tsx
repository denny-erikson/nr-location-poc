import { PointType } from "../../commons/pointEnum"
import { Image, Text, TouchableHighlight, View, ViewBase } from "react-native"
import { ButtonPointer, CalloutPointer, CardPointer, ContentPointer, IconButtonPointer, ImagePointer, SplotCalloutPointer, SubTitlePoint, TextButtonPointer, TitlePoint } from "./styles"
import ImageNavigation from  '../../../assets/icons/icon-navigation.svg'
import { useModal } from "../../hooks/useModal"
import { useFilterPoint } from "../../hooks/useFilterPoint"
import { StyleSheet } from "react-native"
import { useEffect } from "react"
import { Callout } from "react-native-maps"


export const Pointer = ({ pointer }: { 
  pointer: PointType 

}) =>{
    const {toggleModal} = useModal()
    const {setPoint} = useFilterPoint()

    return (
        <Callout 
                   
          tooltip
          onPress={()=>{
            toggleModal()
            setPoint(pointer)
            }}>

          <CardPointer>
           <ContentPointer>
                <TitlePoint>{pointer.name}</TitlePoint>
                <SubTitlePoint>{pointer.category}</SubTitlePoint>
                <ButtonPointer>
                    <TextButtonPointer>Ver mais</TextButtonPointer>
                    <TextButtonPointer style={{fontSize:32, fontWeight: 700, marginTop: -6}}>&rsaquo;</TextButtonPointer>
                </ButtonPointer>
              </ContentPointer>
            <SplotCalloutPointer />
          </CardPointer>
        </Callout>
    )
}


const styles = StyleSheet.create({
  imageWrapperText: {
    width: 56,
    height: 56,
    marginTop: -22,
    marginRight: 4,
    marginLeft: -8,
    borderRadius: 28,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 56,
  },
})



