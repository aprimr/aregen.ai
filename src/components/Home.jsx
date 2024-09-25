import React from 'react'

function Home({children}) {
  return (
    <div className='h-[100vh] w-full bg-slate-700 relative'>
      {children}
    </div>
  )
}

export default Home

