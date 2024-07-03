import React from "react";
import { getDictionary } from "../dictionaries";



const Blog = async({ params: { lang } } : any) => {
  const dict = await getDictionary(lang)

  return (
    <>
      
      <h1> {dict.blog.header}</h1>
      
    </>
  )
}

export default Blog