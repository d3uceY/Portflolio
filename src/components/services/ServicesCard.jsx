import React from 'react'
import "./css/serviceCard.css"

export default function ServicesCard(props) {
  // object deconstructuring
  const { image, title } = props.data;
  return (
    <div className='service-card bg-grey  lg:max-w-[350px] px-6 md:px-[50px] py-6 md:py-[35px]'>
      <div className="image-container mb-5 sm:mb-[30px]">
        <img className='block sm:w-auto sm:h-auto w-10' src={image} alt={`${title} image`} />
      </div>
      <div className='capitalize text-2xl sm:text-4xl text-light-grey font-medium'>{title} <span className='block'>development</span></div>
    </div>
  )
}