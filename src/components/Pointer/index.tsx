import { PointType } from "../../commons/pointEnum"
import { TouchableHighlight } from "react-native"
import { ButtonPointer, CalloutPointer, CardPointer, ContentPointer, IconButtonPointer, ImagePointer, SplotCalloutPointer, SubTitlePoint, TextButtonPointer, TitlePoint } from "./styles"
import ImageNavigation from  '../../assets/icons/icon-navigation.svg'


export const Pointer = ({name, imageUrl, category}: PointType) =>{
    return (
        <CalloutPointer            
        tooltip
        onPress={()=>{
            console.log("[VER MAIS]: ", name)
            }}>

          <CardPointer>
            <ImagePointer source={{uri: imageUrl}} />
            <ContentPointer>
              <TitlePoint>{name}</TitlePoint>
              <SubTitlePoint>{category}</SubTitlePoint>
              <ButtonPointer>
                  <IconButtonPointer source={ImageNavigation}/>
                  <TouchableHighlight onPress={()=>{
                    console.log("[VER MAIS]: ", name)
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



