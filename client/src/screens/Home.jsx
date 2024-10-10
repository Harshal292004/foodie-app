import Footer from '../components/Footer/Footer'
import Carousel from "../components/Carousel/Carousel"
import Navbar from '../components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import FoodBar from '../components/FoodBar/FoodBar'
function App() {

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

  return(
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div className="mt-3">
     <Carousel images={['https://imgs.search.brave.com/t11ImSGQZLBt-2-45oDuYC9CPcP8YtDqsDPYOiV9AGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pdGFsaWFuLXBp/enphLXdvb2Rlbi10/YWJsZS1waWVjZS1o/b3QtcGl6emEtd2l0/aC1jaGVlc2Utc3Ry/ZXRjaGluZ18xMDI2/OTUwLTg4MDg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn','https://imgs.search.brave.com/9OTFW10L4OvmWQ5yRQIA_IUlJGZG0gRUnF4w9IoVRnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAw/ODAxNjU3Mi9waG90/by9idXJnZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW5M/cGgzMklUaU90QlFp/RHFuY3JPSWxYMmRu/SnZYeVM4ZS1Bd29a/QllOWDQ9','https://imgs.search.brave.com/CSFe6Yt9mdpm0dY5Vk0ALJNxz-jhQGMufxBD9MV3Ar8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA2L2lkbGkud2Vi/cA']}></Carousel>
    </div>
    <div className="mt-10 p-5">
    {
      foodCat.forEach(
        (category)=>{  
            <FoodBar
            title={""}
            category={category.CategoryName}
            foodArray={foodArray}
            >  
            </FoodBar>
        }
      )
          
    }
    </div>
    <div>
      <Footer></Footer>
    </div>

    </>
  )
}

export default App
