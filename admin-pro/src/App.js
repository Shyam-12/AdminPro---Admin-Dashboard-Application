import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

function App() {
  const activeMenu = 'false';

  return (
    <div>
        <BrowserRouter>
          <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
                {/* Render first syncfusion component */}
                <TooltipComponent content="Settings" position='Top'>
                  <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: "blue", borderRadius: '50%'}}>
                    <FiSettings />
                  </button>
                </TooltipComponent> 
            </div>
            {
              activeMenu ? (
                <div className='w-72 fixed sidebar dark: bg-secondary-dark-bg bg-white'>
                  SideBar
                </div>
              ) : (
                <div className='w-0 dark:bg-secondary-dark-bg'>
                  SideBar w-0
                </div>
              )
            }

            <div className={
              `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
              // activeMenu ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'dark:bg-main-dark-bg bg-main-bg min-h-screen w-full flex-2'
            }> 
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>Navbar</div>
            </div>
          </div>
        </BrowserRouter>
    </div>
  )
}

export default App;