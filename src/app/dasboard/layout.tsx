import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex h-screen flex-col md:flow-row'>
        <div className='md:w-64 w-full flex-none'>
            Sidebar
        </div>
        <div className='grow border p-6 md:p-12 '>{children}</div>
    </div>
  )
}

export default layout