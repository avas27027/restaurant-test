import React from 'react'
import CardsMove from './CardsMove'
import Carousel from './Carousel'
import Navbar from './Navbar'

export default function Landing() {
  const imgs = ['https://noticiasgourmet.es/wp-content/uploads/2019/11/Arroz_chaufa_con_pollo_de_corral_gambas_pl%C3%A1tano_maduro_y_huevo-noticias_gourmet.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHK79Kiigpv_XGrRyZe19bhdKPXFys_-fgQ&usqp=CAU',
    'https://comidaenserie.files.wordpress.com/2015/05/img_4550.jpg']
  const arr = [{ id: 1 }, { id: 2 }, { id: 3 },
  { id: 4 }, { id: 5 }, { id: 6 },
  { id: 7 }, { id: 8 }]

  return (
    <div className='landing background'>
      <Navbar />
      <Carousel imgs={imgs} />
      <CardsMove cardsArr={arr} />
    </div>
  )
}
