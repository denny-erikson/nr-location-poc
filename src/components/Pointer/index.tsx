import { PointType } from "../../commons/pointEnum"
import { TouchableHighlight } from "react-native"
import { ButtonPointer, CalloutPointer, CardPointer, ContentPointer, IconButtonPointer, ImagePointer, SplotCalloutPointer, SubTitlePoint, TextButtonPointer, TitlePoint } from "./styles"
import ImageNavigation from  '../../assets/icons/icon-navigation.svg'
import { useModal } from "../../hooks/useModal"
import { useFilterPoint } from "../../hooks/useFilterPoint"


export const Pointer = ({slug, name, imageUrl, category, description, location}: PointType) =>{
    const {toggleModal} = useModal()
    const {setPoint} = useFilterPoint()

    return (
        <CalloutPointer            
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
            <ImagePointer source={{uri: imageUrl}} />
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



