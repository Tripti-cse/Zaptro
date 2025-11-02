import { createContext, useContext, useState} from "react";
import axios from "axios";
   
  export const DataContext = createContext(null);

  export const DataProvider =({children})=>{
    const [data,setData] = useState()

    //  products from api
  const fetchAllProducts = async()=>{
   try{
    const res = await axios.get('https://fakestoreapi.com/products')
  console.log(res);
  const productsData = res.data; 
  setData(productsData)
  }
   catch(error){
   console.log("Products not find",error);
   }
  };
      const uniqueCategory =(data, property)=>{
          let newVal = data?.map((elem)=>{
              return elem[property]
          })
          newVal =["All",...new Set(newVal)]
          return newVal
      };
      const categoryWiseData=uniqueCategory(data,"category");
    
    return (<DataContext.Provider value={{data,setData,fetchAllProducts,categoryWiseData}}>
      {children}
    </DataContext.Provider>
   );
  };
  export const getData=()=> useContext(DataContext);