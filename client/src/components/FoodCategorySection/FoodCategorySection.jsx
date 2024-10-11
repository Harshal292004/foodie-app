import React, { useEffect, useState } from 'react'
import FoodBar from '../FoodBar/FoodBar'

const FoodCategorySection = () => {
    
  const [foodCat,setFoodCat]=useState([])

  const [foodArray,setFoodArray]=useState([])
 
  const shuffleArray=(array)=>{
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const getRandomCategories=(array, numberOfCategories)=>{
    let shuffledArray = shuffleArray(array);
    return shuffledArray.slice(0, numberOfCategories);
  }
  
  useEffect(()=>{
    const fetchFoodCat = async () => {
      try {
        const response = await fetch('http://localhost:5000/products/loadProducts', {
          method: 'GET'
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        const productsCategoryArray = getRandomCategories(data.productsCategory, 3);
        const products= data.products
        setFoodCat(productsCategoryArray)
        setFoodArray(products)
      } catch (err) {
      }
    }

    fetchFoodCat();
  },[]);
  return (
    <div>
      <div className="mt-10 p-5">
      {foodCat.map((category, index) => (
        <FoodBar
          key={index}
          title=""
          category={category.CategoryName}
          foodArray={foodArray}
        />
      ))}
        </div>
    </div>
  )
}

export default FoodCategorySection
