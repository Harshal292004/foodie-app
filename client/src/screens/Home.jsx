import Footer from '../components/Footer/Footer'
import Carousel from "../components/Carousel/Carousel"
import Navbar from '../components/Navbar/Navbar'
import { MdMenuBook } from "react-icons/md";
import Badge from '../components/Badge/Badge'
import { FaConciergeBell } from "react-icons/fa";
import FoodCategorySection from '../components/FoodCategorySection/FoodCategorySection'
function App() {

  return(
    <>
    <div>
      <Navbar
        middleOptions={
          [
            {
              to:"/Menu",className:"",icon:<MdMenuBook/>,title:"Menu"
            },
            {
              to:"/MyCart", className:"", icon:<FaConciergeBell />,badge:<Badge value={0}/>, title:"My Cart"
            }
          ]
        }
        rightOptions={
          [
            {
              to:"/login",className:"",icon:<></>,title:"Login",isLoggedOut:true
            },
            {
              to:"/register",className:"",icon:<></>,title:"Sign Up",isLoggedOut:true
            }
          ]
        }
        isLoggedIn={false}
        ></Navbar>
    </div>

    <div className="mt-3">
     <Carousel images={['https://imgs.search.brave.com/t11ImSGQZLBt-2-45oDuYC9CPcP8YtDqsDPYOiV9AGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pdGFsaWFuLXBp/enphLXdvb2Rlbi10/YWJsZS1waWVjZS1o/b3QtcGl6emEtd2l0/aC1jaGVlc2Utc3Ry/ZXRjaGluZ18xMDI2/OTUwLTg4MDg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn','https://imgs.search.brave.com/9OTFW10L4OvmWQ5yRQIA_IUlJGZG0gRUnF4w9IoVRnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAw/ODAxNjU3Mi9waG90/by9idXJnZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW5M/cGgzMklUaU90QlFp/RHFuY3JPSWxYMmRu/SnZYeVM4ZS1Bd29a/QllOWDQ9','https://imgs.search.brave.com/CSFe6Yt9mdpm0dY5Vk0ALJNxz-jhQGMufxBD9MV3Ar8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA2L2lkbGkud2Vi/cA']}></Carousel>
    </div>
    <FoodCategorySection/>
    <div>
      <Footer></Footer>
    </div>

    </>
  )
}

export default App
