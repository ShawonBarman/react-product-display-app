import React from 'react'

export default function Category({finalCategory, setCategoryName}) {
  let category = finalCategory.map((v, i) => {
    return (
      <li onClick={()=>{setCategoryName(v.name)}} key={i}>{v.name}</li>
    );
  })

  return (
    <div>
        <h2 className='text-center'>Category</h2>
        <ul>
            {category}
        </ul>
    </div>
  )
}
