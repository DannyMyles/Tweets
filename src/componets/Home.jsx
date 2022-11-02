import {useState} from 'react'
import BlogList from './BlogList';
const Home = () => {
  const [blogs, setblogs] = useState([
    {title: 'Good Kenyan',body: 'Joining the blog', author: 'Tembu', id:1},
    {title: 'Here',body: 'Joining the blog', author: 'James', id:2},
    {title: 'Save me',body: 'Joining the blog', author: 'Danny', id:3},
    {title: 'Actas',body: 'Joining the blog', author: 'Maina', id:4}

  ]);

  //Deleting a blog from the list
  const handleDelete =(id)=>{
    const newBlogs = blogs.filter(blog =>blog.id !== blog)
    setblogs(newBlogs);
  }

  return (
     <>
     <BlogList  blogs={blogs} handleDelete={handleDelete}/>
     </>

  )
}

export default Home