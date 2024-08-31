import React, { ReactNode } from 'react'

const Wrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className='max-w-screen-2xl mx-auto p-5'>{children}</div>
  )
}

export default Wrapper