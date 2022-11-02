
import Button from 'react-bootstrap/Button';
const BlogList = ({blogs,handleDelete }) => {

  return (
    <div className="blog-list">
      {
       blogs.map((blog)=>(
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <Button variant='outline-danger' onClick={()=>handleDelete(blog.id)}>Delete</Button>
        </div>
        ))
      }
    </div>
  )
}

export default BlogList