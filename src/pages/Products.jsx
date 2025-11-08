import React, { useEffect, useState } from 'react'
import { getData } from '../context/DataContext'
import FilterSection from '../components/FilterSection'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const {data,fetchAllProducts} =getData()


  const [search,setSearch] = useState("")
  const [category,setCategory] = useState("All")
  const [priceRange,setPriceRange] = useState([0,100])

  useEffect(()=>{
    fetchAllProducts()
    window.scrollTo(0,0)
  },[])

  const handleCategoryChange=(e)=>{
    setCategory(e.target.value)
  }

  const filterdData =data?.filter((item)=>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category=== "All" || item.category===category) &&
    item.price >= priceRange[0] && item.price <=priceRange[1] 
  )

  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
     {
      data?.length>0? ( <div className='flex gap-8 '>
       <FilterSection search={search} setSearch={setSearch} priceRange={priceRange} setPriceRange={setPriceRange}
        category={category} setCategory={setCategory} handleCategoryChange ={handleCategoryChange}/>
       <div className='grid md:grid-cols-3 grid-cols-2 md:gap-7 gap-5 mt-10'>
        {
          filterdData?.map((product,idx)=>{
            return <ProductCard key={idx} product={product}/>
          })
        }
       </div>
      </div>)
      :(<div>No items found</div>)
           }
      </div>
    </div>
  )
}

export default Products