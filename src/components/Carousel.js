import React from 'react'

export default function Carousel() {
    const imgSrc = ['https://noticiasgourmet.es/wp-content/uploads/2019/11/Arroz_chaufa_con_pollo_de_corral_gambas_pl%C3%A1tano_maduro_y_huevo-noticias_gourmet.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHK79Kiigpv_XGrRyZe19bhdKPXFys_-fgQ&usqp=CAU',
        'https://comidaenserie.files.wordpress.com/2015/05/img_4550.jpg']
    return (
        <div>
            <img className='carousel-img' src={imgSrc[0]} />
            <img className='carousel-img' src={imgSrc[1]} />
            <img className='carousel-img' src={imgSrc[2]} />
        </div>
    )
}
