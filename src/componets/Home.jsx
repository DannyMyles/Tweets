import BlogList from './BlogList';
import {useState,useEffect} from 'react'


const Home = () => { 
  // APi
  const url ='http://localhost:4200/blogs'
  const [blogs, setblogs] = useState([]);
  const  [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  //APi fetch
  useEffect(() => {
    fetch(url)
      .then(res => {
        //Error handling
        if (!res.ok) {
          throw Error('Could not fetch blog list ')
        }
      return res.json()})
      .then(data => {
        setblogs(data)
        //If there is error setIsPending is turned to false so that it stops loading
        setIsPending(false)
        setError(null)

      })
      // Catch errror
      .catch((err)=>{
        alert(err.message)
      })
  }, []);

  return (
     <div className='home'>
      {error && <div>{error}</div>}
     { isPending && <div>Loading ... </div>}
     {blogs && <BlogList  blogs={blogs}/>}
     </div>

  )
}

export default Home