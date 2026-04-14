import React from 'react'

const page = async ({params}: {params: {category: string}}) => {
    const {category} = await params;
  return (
    <div>
        {category} Products Page
    </div>
    
  )
}

export default page