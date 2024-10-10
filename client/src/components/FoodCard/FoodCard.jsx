import React, { useEffect, useState } from 'react'

const FoodCard = ({ imageSrc, title, description, priceOptions, maxQuantity, eggMark }) => {
  const [size, setSize] = useState('half')
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(priceOptions.half)
  const [totalPrice, setTotalPrice] = useState(priceOptions.half)

  useEffect(() => {
    setPrice(size === 'half' ? priceOptions.half : priceOptions.full)
  }, [size, priceOptions])

  useEffect(() => {
    setTotalPrice(price * quantity)
  }, [price, quantity])

  const handleSizeChange = (e) => {
    setSize(e.target.value)
  }

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value))
  }

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-4">
        <div className="font-bold text-xl mb-1 text-orange-600">{title}</div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className='flex flex-col gap-2 mb-3'>
          <div className='flex items-center justify-between'>
            <label htmlFor="Quantity" className="text-gray-700 font-medium">Quantity:</label>
            <select 
              className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-1 px-3 rounded transition duration-300'
              id="Quantity" 
              value={quantity}
              onChange={handleQuantityChange}
            >
              {Array.from({ length: maxQuantity }, (_, i) => (
                <option key={i+1} value={i+1}>{i+1}</option>
              ))}
            </select>
          </div>
          <div className='flex items-center justify-between'>
            <label htmlFor="size" className="text-gray-700 font-medium">Size:</label>
            <select 
              className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-1 px-3 rounded transition duration-300'
              id="size"
              value={size}
              onChange={handleSizeChange}
            >
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-bold text-xl">${totalPrice.toFixed(2)}</span>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded transition duration-300">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
