
import styled from 'styled-components/native';
import PagerView from 'react-native-pager-view';
import { Text, View } from 'react-native';

const SliderContainer = styled.View`
  width: 100%;
  height: 220px;
  margin: 0 auto;
  padding: 12px 0;
  box-sizing: border-box;
  margin-top:24px;
  background-color: #f2f2fa;
`;

const Slide = styled.View`
  justify-content: center;
  align-items: center;
  height: 220px;
  overflow: hidden;
  margin-right: 4px;
  background-color: #777;
`;

const SlideImage = styled.Image`
  max-width: 100%;
  object-fit: cover;
  padding:4px;  
  background-color: #999;
`;

interface ImageSliderProps {
  images: string[];
  isOpen?: boolean; 
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, isOpen }) => {
  return (
    <SliderContainer>
        <PagerView initialPage={0}>
          {images.map((image, index) => (
            <Slide key={index}>
              <SlideImage src={image} alt={`Slide ${index}`} />
            </Slide>
          ))}
        </PagerView>
    </SliderContainer>
  );
};


