import React from 'react'

const Footer = () => {
    return (
      <footer className='absolute left-0 bottom-0 right-0 z-50 text-white flex flex-col items-center gap-3'>
        <div className="flex flex-row gap-3">
          <a>
            <img src='/images/linkedin.png' className='h-10 w-auto'></img>
          </a>
          <a>
            <img src='/images/x.png' className='h-10 w-auto'></img>
          </a>
        </div>
        <div>
          <p>&copy; 2024 Gainz. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  
  export default Footer