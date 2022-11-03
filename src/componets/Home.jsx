
import BlogList from './BlogList';
import {useState,useEffect} from 'react'

const Home = () => { 
  // APi
  const url ='http://localhost:4200/blogs'
  const [blogs, setblogs] = useState([]);

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
     <BlogList  blogs={blogs}/>
     </>

  )
}

export default Home