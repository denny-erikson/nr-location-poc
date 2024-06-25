import { PointType } from "../../commons/pointEnum"
import { Image, Text, TouchableHighlight } from "react-native"
import { ButtonPointer, CalloutPointer, CardPointer, ContentPointer, IconButtonPointer, ImagePointer, SplotCalloutPointer, SubTitlePoint, TextButtonPointer, TitlePoint } from "./styles"
import ImageNavigation from  '../../../assets/icons/icon-navigation.svg'
import { useModal } from "../../hooks/useModal"
import { useFilterPoint } from "../../hooks/useFilterPoint"
import { StyleSheet } from "react-native"
import { useEffect } from "react"
import { Callout } from "react-native-maps"


export const Pointer = ({slug, name, imageUrl, category, description, location, images}: PointType) =>{
    const {toggleModal} = useModal()
    const {setPoint} = useFilterPoint()

    return (
        <Callout 
                   
          tooltip
          onPress={()=>{
            toggleModal()
            setPoint({
                slug,
                name,
                imageUrl,
                category,
                description,
                location,
                images
              })
            }}>

          <CardPointer>
            {/* <Text style={styles.imageWrapperText}>
              <Image resizeMode='cover' style={styles.image} source={
                imageUrl?{uri: imageUrl}
                :require('../../../assets/images/compass-nr56.png')
              }/>
            </Text> */}
            <ContentPointer>
              <TitlePoint>{name}</TitlePoint>
              <SubTitlePoint>{category}</SubTitlePoint>
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
    borderRadius: 50,
    marginTop: -22,
    marginRight: 4,
    marginLeft: -8,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 56,
  },
})



