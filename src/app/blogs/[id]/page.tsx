import React from 'react'

const page = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
  return (
    <div>blog details page: {id}</div>
  )
}

export default page