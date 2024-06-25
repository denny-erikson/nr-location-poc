import CompassIcon from '../../assets/icons/compass-nr.svg'
import HoverboardIcon from '../../assets/icons/hoverboard-icon.svg'
import UserIcon from '../../assets/icons/user-icon.svg'


export enum MarkerType {
  USER ='user',
  OTHER ='other',
  COMPASS ='compass',
  HOVERBOARD = 'hoverboard'
}

type MarkerTypes = {
  [key in MarkerType]: string;
}

/* const markerIcon = MarkerImage(RoverImage); */
export const markerEnum: MarkerTypes = {
  user: UserIcon,
  other: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  compass: CompassIcon,
  hoverboard: HoverboardIcon,
}






