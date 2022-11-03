import {useState, useEffect} from 'react';

const useFetch = (url) => {
      const [data, setData] = useState([]);
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
          setData(data)
          //If there is error setIsPending is turned to false so that it stops loading
          setIsPending(false)
          setError(null)
  
        })
        // Catch errror
        .catch((err)=>{
          alert(err.message)
        })
    }, [url]);

    return {data,error,isPending}
  
}

export default useFetch