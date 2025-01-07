import React from 'react'

function LoadingPage() {
  return (
    <div className=' h-screen flex items-center justify-center'>
        <div className="text-center ">
        <p className="loading loading-bars loading-lg  mx-auto "></p><p className="mx-auto  font-semibold text-2xl">loading....</p>
        </div>
    </div>
  )
}

export default LoadingPage