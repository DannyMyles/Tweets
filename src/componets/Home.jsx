import {useState,useEffect} from 'react'
const Home = () => {
  // APi
  const url ='http://localhost:4200/blogs'
  const [blogs, setblogs] = useState([null]);

  //APi fetch
  useEffect(() => {
    fetch(url)
    .then(res => {
      return res.json()})
      .then(data => {
        setblogs(data)
      })
  }, []);




  return (
     <>
      {
       blogs.map((blog)=>(
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
        ))
      }
     </>

  )
}

export default Home