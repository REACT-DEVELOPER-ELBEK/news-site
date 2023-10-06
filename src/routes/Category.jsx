import axios from 'axios'
import { useEffect, useState } from 'react'

const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(()=>{
        axios("http://localhost:3000/news")
        .then(response=>setCategory(response.data))
        .catch(error=>console.log(error))
    })
  return (
    <div className="category">
        <div className="container">
            <div className="category__wrapper">

            </div>
        </div>
    </div>
  )
}

export default Category