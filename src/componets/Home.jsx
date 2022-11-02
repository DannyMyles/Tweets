import BlogList from './BlogList';
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


  //Deleting a blog from the list
  const handleDelete =(id)=>{
    const newBlogs = blogs.filter(blog =>blog.id !== id);
    setblogs(newBlogs);
  }
  return (
     <>
     <BlogList  blogs={blogs} handleDelete={handleDelete}/>
     </>

  )
}

export default Home