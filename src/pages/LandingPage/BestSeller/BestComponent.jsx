import React from 'react'
import SellerCard from './SellerCard'

const BestComponent = () => {
  return (
    <div className="p-6">
      <h2 className='text-center text-xl font-bold mb-3 text-taupe-950'>Best Seller</h2>
      <div className='flex'>
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
      </div>
    </div>
  );
}

export default BestComponent