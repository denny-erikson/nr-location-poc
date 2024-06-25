// import { Icon } from 'leaflet'
// import { markerEnum } from "./markerEnum"
// import { MarkerImage } from '../components/MarkerImage'

import { markerEnum } from "./markerEnum"

export type PointType = {
  slug: string
  name: string
  category: string
  description: string
  imageUrl: string
  images: string[]
  location: [number, number]
  icon?: string | any
  }

export enum PointEnumType {
  CAMPING = 'camping',
  HOVERBOARD = 'hoverBoard',
  CAIAQUES_AND_STAND_UP_PADDLE = 'caiaques_and_stand_up_paddle',
  SWIMMING_POOL_WITH_SLIDE = 'swimming_pool_with_slide',  
  SANDA_SOCCER = "sanda_soccer",
}

type MarkerTypes = {
  [key in PointEnumType]: PointType
}

export const pointEnum: MarkerTypes = {
  camping:{
    slug: 'camping',
    name: "NR Camping",
    category:"outdoor-recreation",
    description: "Camping",
    imageUrl: "https://nr.com.br/wp-content/uploads/2024/02/home-sap.png",
    location: [
      -22.83625411510771, -45.78033164558295
    ],
    images:[
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    ],
    icon: require('../../assets/images/compass-nr156.png')
  },
 hoverBoard:   {
    slug: 'hoverBoard',
    name: "Hover Board",
    category:"outdoor-recreation",
    description: "Esse ai é o HoverBoard um brinquedo que você só encontra no NR! Tem coragem de dar o 360°?",
    imageUrl: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    location: [
      -22.83568225015796, -45.78061578398183    
    ],
    images:[
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    ],
    icon: require('../../assets/images/hoverboard-icon156.png')
  },
  caiaques_and_stand_up_paddle:   {
    slug: 'caiaques_and_stand_up_paddle',
    name: "Caiaques e Stand Up Paddle",
    category:"outdoor-recreation",
    description: "Desbloqueie o seu lado aventureiro e explore o lago",
    imageUrl: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    location: [
      -22.834052734726413, -45.77931802158773
    ],
    images:[
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    ],
    // icon: markerEnum.other
  },
  swimming_pool_with_slide:   {
    slug: 'swimming_pool_with_slide',
    name: "Piscina com Tobogã",
    category:"outdoor-recreation",
    description: "Piscina com Tobogã para você se divertir",
    imageUrl: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    location: [
      -22.83678934335853, -45.78220085589788
    ],
    images:[
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    ],
    // icon: markerEnum.other
  },
  sanda_soccer:   {
    slug: 'sanda_soccer',
    name: "Futebol de areia",
    category:"outdoor-recreation",
    description: "Desbloqueie o seu lado esportivo e faça um gol",
    imageUrl: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    location: [
      -22.833897385097686, -45.77969445501984
    ],
    images:[
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    ],
    // icon: markerEnum.other
  },
}





