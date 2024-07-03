
import { getDictionary } from './dictionaries'
 
export default async function Page({ params: { lang } } : any) {
      console.log("================================nnnn",lang);
  const dict = await getDictionary(lang) 
  return (
  <>    

        
       <button>{dict.products.cart}</button> 


  </>
   )

}