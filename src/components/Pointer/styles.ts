import { Callout } from "react-native-maps"
import styled from "styled-components/native"

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