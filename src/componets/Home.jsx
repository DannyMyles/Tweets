import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {data:blogs,error, isPending} = useFetch('http://localhost:4200/blogs');
  return (
     <div className='home'>
      {error && <div>{error}</div>}
     { isPending && <div>Loading ... </div>}
     {blogs && <BlogList  blogs={blogs}/>}
     </div>

  )
}

export default Home