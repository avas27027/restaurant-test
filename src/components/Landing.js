import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'

export default function Landing() {
  const imgs = ['https://noticiasgourmet.es/wp-content/uploads/2019/11/Arroz_chaufa_con_pollo_de_corral_gambas_pl%C3%A1tano_maduro_y_huevo-noticias_gourmet.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHK79Kiigpv_XGrRyZe19bhdKPXFys_-fgQ&usqp=CAU',
    'https://comidaenserie.files.wordpress.com/2015/05/img_4550.jpg']
  return (

    <div >
      <Navbar />
      <Carousel imgs={imgs}/>

    </div>
  )
}
