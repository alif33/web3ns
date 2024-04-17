import Image from 'next/image';
import React from 'react'

function SevenImage() {
  return (
    <div className='fixed right-0 top-1/2 transform -translate-y-1/2 w-24 h-52' >
        <Image alt='Image'src='7.svg' objectFit="cover"  layout="fill" className='block w-full h-full' />
    </div>
  )
}

export default SevenImage;