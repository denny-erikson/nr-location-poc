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
  LAGO_NESS = 'lago_ness',
  MAIN_ENTRANCE = "main_entrance",
  PIZZERIA = "pizzeria",
  MANTIQUEIRA = "mantiqueira",
  BELGIAN_CAMP_1 = "belgian_camp_1",
  GAME_ROOM = "game_room",
  GATEHOUSE = "gatehouse",
  CAFETERIA = "cafeteria",
  COUNTRYSIDE = "countryside",
  SAND_SOCCER = "sand_soccer",
  VOLEI_DE_AREIA = "volei_de_areia",
  GINASIO_1_CELSO_HALPERN = "ginasio_1_celso_halpern",
  ENFERMARIA = "enfermaria",
  RESTAURANTE = "restaurante",
  ITAPORA = "itapora",
  QUADRAS_DE_TENIS = "quadras_de_tenis",
  PISCINAS_TOBOGA = "piscinas_toboga",
  SALA_HOLLYWOOD = "sala_hollywood",
  RECEPCAO = "recepcao",
  RESTAURANTE_VILLAGE_ITAPEVA = "restaurante_village_itapeva",
  ESPACO_FUN_FEST = "espaco_fun_fest"
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
      "https://lh5.googleusercontent.com/p/AF1QipPET5YasUO2NfNMUwo42IJ9LvN6xr0h67E8oH-s=w253-h337-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipMU3RCLOlSALjFCHnSdryv1sjft_z7thx7523jN=w253-h189-k-no",
      "https://nr.com.br/wp-content/uploads/2024/02/home-sap.png",
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
      "https://www.minasgerais.com.br/imagens/atracoes/1627665807gOKyCM5xkV.jpg",
      "https://f.i.uol.com.br/fotografia/2019/07/03/15621754835d1ce7fb802ed_1562175483_3x2_md.jpg",
      "https://live.staticflickr.com/4513/37446320442_508abfb073_w.jpg",
    ],
    icon: require('../../assets/images/caiaques_and_stand_up_paddle156.png')
  },
  swimming_pool_with_slide:   {
    slug: 'swimming_pool_with_slide',
    name: "Piscina com Tobogã",
    category:"outdoor-recreation",
    description: "Piscina com Tobogã para você se divertir",
    imageUrl: "https://lh5.googleusercontent.com/p/AF1QipO5xOuuA6qifB7bvwiLef695g37KYE74xspepaq=w253-h449-k-no",
    location: [
      -22.83678934335853, -45.78220085589788
    ],
    images:[
      "https://lh5.googleusercontent.com/p/AF1QipNVTzLZsG0LDPlcOK7TNeHb3tyouit0z9iQ8_le=w253-h189-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipMbjEVzntdE-evrlmETJCeG2IJprrYDK4ivDk86=w253-h189-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPXH4Q20b_TXyfzqVN37ALXSCguRConkooWed8i=w253-h142-k-no",
    ],
    icon: require('../../assets/images/swimming_pool_with_slide_icon156.png')
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
      "https://img.freepik.com/fotos-premium/diretamente-acima-do-tiro-de-bola-de-futebol-na-praia-de-areia_1048944-14690520.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719100800&semt=ais_user",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
    lago_ness: {
    slug: 'lago_ness',
    name: "Lago Ness",
    category: "natureza",
    description: "Descubra a beleza tranquila do Lago Ness.",
    imageUrl: "https://example.com/lago_ness.jpg",
    location: [
      -22.833897385097686, -45.77969445501984
    ],
    images:[
      "https://img.freepik.com/fotos-premium/diretamente-acima-do-tiro-de-bola-de-futebol-na-praia-de-areia_1048944-14690520.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719100800&semt=ais_user",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  main_entrance: {
    slug: 'main_entrance',
    name: "Entrada Principal",
    category: "serviços ao visitante",
    description: "Bem-vindo à nossa entrada principal.",
    imageUrl: "https://example.com/main_entrance.jpg",
    location: [
      -22.83368366935716, -45.777470016256
    ],
    images:[
      "https://img.freepik.com/fotos-premium/diretamente-acima-do-tiro-de-bola-de-futebol-na-praia-de-areia_1048944-14690520.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719100800&semt=ais_user",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  pizzeria: {
    slug: 'pizzeria',
    name: "Pizzaria",
    category: "comida e bebida",
    description: "Desfrute de pizzas deliciosas em nossa pizzaria.",
    imageUrl: "https://example.com/pizzeria.jpg",
    location: [
      -22.83294269459861, -45.78054547900008
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  mantiqueira: {
    slug: 'mantiqueira',
    name: "Mantiqueira",
    category: "natureza",
    description: "Explore a região cênica da Mantiqueira.",
    imageUrl: "https://example.com/mantiqueira.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  belgian_camp_1: {
    slug: 'belgian_camp_1',
    name: "Campo 1 - Belga",
    category: "esportes",
    description: "Experimente esportes e atividades no Campo 1 - Belga.",
    imageUrl: "https://example.com/belgian_camp_1.jpg",
    location: [
      -22.83720788400907, -45.78292348395839 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  game_room: {
    slug: 'game_room',
    name: "Salão de Jogos",
    category: "entretenimento",
    description: "Divirta-se em nosso salão de jogos com diversos jogos indoor.",
    imageUrl: "https://example.com/game_room.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  gatehouse: {
    slug: 'gatehouse',
    name: "Portaria",
    category: "serviços ao visitante",
    description: "Visite nossa portaria para assistência e informações.",
    imageUrl: "https://example.com/gatehouse.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  cafeteria: {
    slug: 'cafeteria',
    name: "Cantina",
    category: "comida e bebida",
    description: "Pegue um lanche em nossa cantina com uma variedade de lanches e bebidas.",
    imageUrl: "https://example.com/cafeteria.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  countryside: {
    slug: 'countryside',
    name: "Campestre",
    category: "natureza",
    description: "Experimente o charme rústico de nossa área campestre.",
    imageUrl: "https://example.com/countryside.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  sand_soccer: {
    slug: 'sand_soccer',
    name: "Futebol de Areia",
    category: "esportes",
    description: "Jogue futebol em nossas praias de areia.",
    imageUrl: "https://example.com/sand_soccer.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  volei_de_areia: {
    slug: 'volei_de_areia',
    name: "Vôlei de Areia",
    category: "esportes",
    description: "Divirta-se jogando vôlei em nossas quadras de areia.",
    imageUrl: "https://example.com/volei_de_areia.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  ginasio_1_celso_halpern: {
    slug: 'ginasio_1_celso_halpern',
    name: "Ginásio 1 - Celso Halpern",
    category: "esportes",
    description: "Participe de eventos esportivos no nosso ginásio 1, dedicado a Celso Halpern.",
    imageUrl: "https://example.com/ginasio_1_celso_halpern.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  enfermaria: {
    slug: 'enfermaria',
    name: "Enfermaria",
    category: "serviços de saúde",
    description: "Visite nossa enfermaria para assistência médica e emergências.",
    imageUrl: "https://example.com/enfermaria.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  restaurante: {
    slug: 'restaurante',
    name: "Restaurante",
    category: "comida e bebida",
    description: "Saboreie deliciosas refeições em nosso restaurante.",
    imageUrl: "https://example.com/restaurante.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  itapora: {
    slug: 'itapora',
    name: "Itaporã",
    category: "natureza",
    description: "Explore a beleza natural de Itaporã.",
    imageUrl: "https://example.com/itapora.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  quadras_de_tenis: {
    slug: 'quadras_de_tenis',
    name: "Quadras de Tênis",
    category: "esportes",
    description: "Pratique tênis em nossas quadras profissionais.",
    imageUrl: "https://example.com/quadras_de_tenis.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  piscinas_toboga: {
    slug: 'piscinas_toboga',
    name: "Piscinas + Tobogã",
    category: "atividades aquáticas",
    description: "Divirta-se nas nossas piscinas com um emocionante tobogã.",
    imageUrl: "https://example.com/piscinas_toboga.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  sala_hollywood: {
    slug: 'sala_hollywood',
    name: "Sala Hollywood",
    category: "entretenimento",
    description: "Assista a filmes e eventos na nossa sala de cinema estilo Hollywood.",
    imageUrl: "https://example.com/sala_hollywood.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  recepcao: {
    slug: 'recepcao',
    name: "Recepção",
    category: "serviços ao visitante",
    description: "Visite nossa recepção para check-in e informações sobre o resort.",
    imageUrl: "https://example.com/recepcao.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  restaurante_village_itapeva: {
    slug: 'restaurante_village_itapeva',
    name: "Restaurante Village Itapeva",
    category: "comida e bebida",
    description: "Experimente a gastronomia local no nosso restaurante Village Itapeva.",
    imageUrl: "https://example.com/restaurante_village_itapeva.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  },
  espaco_fun_fest: {
    slug: 'espaco_fun_fest',
    name: "Espaço Fun Fest",
    category: "entretenimento",
    description: "Divirta-se no nosso espaço dedicado ao entretenimento e festas.",
    imageUrl: "https://example.com/espaco_fun_fest.jpg",
    location: [
      -22.836268348402495, -45.77997857965061 // 
    ],
    images: [
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png",
      "https://w7.pngwing.com/pngs/943/962/png-transparent-frame-gallery-image-images-photo-picture-pictures-mobile-basic-icon.png"
    ],
    icon: require('../../assets/images/pointer-default-icon156.png')
  }
}






// QUADRA POLIESPORTIVA CACHOEIRA
// TELEFONES
// PEIXINHOS
// HORIZONTE
// HOVER BOARD
// CAMPO 2 - SAFÃO GRUTA DE LURDES
// COORDENAÇÃO
// PEIXES
// VILLAGE
// FALSA BAIANA


// GINÁSIO 2 - MÁRCIA R. M. TRILHAS
// PESCARIA
// SALA DOS PROFESSORES
// DIRETORIA
// VILA OLÍMPICA
//  OLÍMPIA
//  ATENAS
//  PARIS
//  LONDRES
// SALÃO PRINCIPAL


// CASA DE PEDRAS
// POENTE
// CANCUN
// PISCINA MALIBU
// SALÃO DE EVENTOS
// SALÃO DE JOGOS LAGO NESS
// BOTIQUE
// LAGO
// DUBAI
// SALA DE ARTES


// TIROLESA
// ESPAÇO DREAMS - ESCALADA + BIKES
// PIONEIRO
// MUSEU “REVOLUÇÃO 32”
// ESTÚDIO MUSICAL
// “100 NOÇÃO”
// SALA BROADWAY
// IBIZA
// VEGAS
// BRUTUS NR
// CAMPO 3 - EVEREST


