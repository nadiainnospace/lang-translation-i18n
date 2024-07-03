import React from "react";
import { getDictionary } from "../dictionaries";


// About parent component 

const About = async({ params: { lang } } : any) => {
  const dict = await getDictionary(lang)

  return (
    <>
    <h1> {dict.about.header}</h1>
      
    </>
  )
}

export default About