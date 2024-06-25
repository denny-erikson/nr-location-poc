import { PointType } from "../../commons/pointEnum"
import { Image, TouchableHighlight } from "react-native"
import { ButtonPointer, CalloutPointer, CardPointer, ContentPointer, IconButtonPointer, ImagePointer, SplotCalloutPointer, SubTitlePoint, TextButtonPointer, TitlePoint } from "./styles"
import ImageNavigation from  '../../../assets/icons/icon-navigation.svg'
import { useModal } from "../../hooks/useModal"
import { useFilterPoint } from "../../hooks/useFilterPoint"
import { StyleSheet } from "react-native"
import { useEffect } from "react"


export const Pointer = ({slug, name, imageUrl, category, description, location}: PointType) =>{
    const {toggleModal} = useModal()
    const {setPoint} = useFilterPoint()

    return (
        <CalloutPointer 
          styled={{
            with: 200,
            height: 58,
          }}           
          tooltip
          onPress={()=>{
            toggleModal()
            setPoint({
                slug,
                name,
                imageUrl,
                category,
                description,
                location
              })
            }}>

          <CardPointer>
            <ImagePointer>
              <Image style={styles.image} source={{uri: imageUrl}}/>
            </ImagePointer>
            <ContentPointer>
              <TitlePoint>{name}</TitlePoint>
              <SubTitlePoint>{category}</SubTitlePoint>
              <ButtonPointer>
                  <IconButtonPointer source={ImageNavigation}/>
                  <TouchableHighlight onPress={()=>{
                    
                  }}>
                    <TextButtonPointer>Ver mais</TextButtonPointer>
                  </TouchableHighlight>
              </ButtonPointer>
            </ContentPointer>
            
          </CardPointer>
          <SplotCalloutPointer />
        </CalloutPointer>
    )
}

const styles = StyleSheet.create({
  image: {
    width: 56,
    height: 56,
    borderRadius: 56,
    resizeMode: 'cover',
  },


})



