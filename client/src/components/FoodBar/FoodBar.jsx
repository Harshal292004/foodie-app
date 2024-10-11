import React from 'react'
import FoodCard from '../FoodCard/FoodCard'

const FoodBar = ({title, category, foodArray}) => {
  return (
    <div>
        <>
        <h1 className='text-black font-semibold text-xl p-3'>{category}</h1>
        <div className='border-t border-orange-200 m-3'></div>
        {   
              foodArray.filter((foodItem) => {
                return foodItem.CategoryName.trim().replace(/\/$/, '').toLowerCase() === category.trim().toLowerCase();
              })
              .map((food, index) => {
                {console.log('food:',food)}
                const {name, image, options, description, eggMark} = food
                {console.log("Options:",options)}
                return (
                  <FoodCard
                    key={index}
                    imageSrc={image}
                    title={name}
                    description={description}
                    priceOptions={{half: options[0].half, full: options[0].full}}
                    maxQuantity={options[0].maxQunatity}
                    eggMark={eggMark}
                  />
                )
            })
        }
        </>    
    </div>
  )
}

export default FoodBar