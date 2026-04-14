import React from 'react'

const page = async ({params}: {params: {category: string, id: string}}) => {
    const {category, id} = await params;
  return (
    <div>
        <h1>Product details page
        </h1>
        <p>Product Category: {category}</p><p>Product id: {id}</p>
    </div>
  )
}

export default page