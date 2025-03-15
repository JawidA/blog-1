import React, { useEffect, useState } from 'react'
import supabase from "../../SupabaseClient";

function List() {

  const [blogList, setBlogList] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const {data, error} = await supabase.from('BlogPosts').select();

      if(error){
        console.log(error)
        setError(error)
      }
      else{
        setBlogList(data)
        setError(null)  
        console.log(data)
      }
    }
    fetchData()
  }, [])

  console.log(blogList)

  return (
    <div>
      
    </div>
  )
}

export default List