import React from 'react'
import { getData } from '../context/DataContext'

const FilterSection = ({search,setSearch,priceRange,setPriceRange,category,setCategory,handleCategoryChange}) => {
  const {categoryWiseData} =getData()
  
  return (
    <div className='bg-gray-100 mt-10 p-4 rounded-md h-max'>
<input type="text" placeholder='Search...' 
value={search} onChange={(e)=>setSearch(e.target.value)} 
className='bg-white p-2 rounded-md border-gray-400 border-2' />
{/* Categorywise data */}
<h1 className='mt-5 font-semibold text-xl'>Category</h1>
<div className='flex flex-col gap-2 mt-3'>
  {
    categoryWiseData?.map((item,idx)=>{
      return <div key={idx} className='flex gap-2'> 
      <input type="checkbox" name={item} checked={category===item} value={item} onChange={handleCategoryChange} />
      <button className='cursor-pointer uppercase'>{item}</button>
      </div>
    })
  }
</div>
{/* Price Range */}

<h1 className='mt-5 font-semibold text-xl mb-3'>Price Range</h1>
<div className='flex flex-col gap-2'>
  <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]} </label>
  <input type="range" name="" id="" value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0],Number(e.target.value)])} />
</div>
<button className='bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer ml-10'
onClick={()=>{setSearch(''); setCategory('All')}}>Reset Filters</button>
    </div>
  )
}

export default FilterSection