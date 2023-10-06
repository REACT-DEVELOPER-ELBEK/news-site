import { useEffect, useState } from 'react'
import './Posts.scss'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'

const Posts = () => {
  const [post, setPost] = useState([])
  useEffect(()=>{
    axios(`http://localhost:3000/news?q=${location.category}`)
    .then(response=>setPost(response.data))
    .catch(error=>console.log(error))
  }, [])
  const location = useParams()
  console.log(location.category);
  return (
    <div className='posts'>
      <div className="container">
        <div className="posts__wrapper">
          <h2>our latest post</h2>
          <div className="cards">
            {
              post.map((post, index)=>
              <div className="card" key={index}>
                <NavLink to='/'><img src={post.img} alt="" /></NavLink>
                <h3>{post.category}</h3>
                <h2>{post.description}</h2>
                <p>{post.date}</p>
              </div>
            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts