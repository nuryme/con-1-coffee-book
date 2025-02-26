import React from 'react'

export default function Heading({title, subTitle}) {
  return (
    <div className='my-8 text-center space-y-3'>
      <h1 className='text-3xl font-medium'>{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}
