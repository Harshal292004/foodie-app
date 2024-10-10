import React from 'react'
import FoodCard from '../FoodCard/FoodCard'

const FoodBar = ({title, category, foodArray}) => {
  return (
    <div>
        <h1 className='text-black font-semibold text-xl'>{category}</h1>
        {console.log(foodArray)}
        {   
            foodArray
              .filter((foodItem) => {return foodItem.CategoryName === category})
              .map((food, index) => {
                {console.log('food:',food)}
                const {name, image, options, description, eggMark} = food
                return (
                  <FoodCard
                    key={index}
                    imageSrc={image}
                    title={name}
                    description={description}
                    priceOptions={{half: options[0].half, full: options[0].full}}
                    maxQuantity={options[0].maxQuantity}
                    eggMark={eggMark}
                  />
                )
            })
        }
    </div>
  )
}

export default FoodBar