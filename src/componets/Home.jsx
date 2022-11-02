import {useState} from 'react'
const Home = () => {
  const [blogs, setblogs] = useState([
    {title: 'Good Kenyan',body: 'Joining the blog', author: 'Tembu', id:1},
    {title: 'Here',body: 'Joining the blog', author: 'James', id:2},
    {title: 'Save me',body: 'Joining the blog', author: 'Danny', id:3},
    {title: 'Actas',body: 'Joining the blog', author: 'Maina', id:4}

  ]);

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