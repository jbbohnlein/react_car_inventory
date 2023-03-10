import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  // The sign out button
  const signOutOnClick = () => {
    signOut(auth)
    location.reload();
  }

  // The sign in button
  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    // const userCred = await getRedirectResult(auth);
    if ( response ) {
      location.reload();
    }
  }

  // This function is going to make the isVisible variable the opposite, and remember it's a boolean
  const dropDown = () => {
    setIsVisible(!isVisible)    
  }

  const clicked = () => {
    setIsVisible(false)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-yellow-600 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6 hover:text-black hover:border-black'>
            <Link to='/' className='font-semibold text-xl tracking-tight'>The Garage</Link>
        </div>
        <div className="block">
            <button 
              onClick={dropDown} className="flex items-center px-3 py-2 text-white border rounded
                 border-white hover:text-black hover:border-black">
                {/* pull bars from font awesome */}
                <i className="fas fa-bars"></i>
            </button>
        </div>
        { isVisible ? ( 
          <div className='w-full block flex-grow items-center'>
            <div className='text-sm.lg:flex-grow'>
              <Button className='p-3 m-3 bg-slate-400 rounded justify-center'>
                <div>
                  <Link to='/' onClick={ clicked } className='flex place-items-center lg:inline-block lg:mt-0
                   text-black hover:text-white mr-4'>
                    Home
                  </Link>
                </div>
              </Button>

              <Button 
                className='p-3 m-3 bg-slate-400 rounded justify-center'>
                <div>
                  <Link to='/dashboard' onClick={ clicked } className='flex place-items-center lg:inline-block lg:mt-0
                   text-black hover:text-white mr-4'>
                    Dashboard
                  </Link>
                </div>
              </Button>

              <Button 
                className='p-3 m-3 bg-slate-400 rounded justify-center'>
                <div>
                  <Link to='/contact' onClick={ clicked } className='flex place-items-center lg:inline-block lg:mt-0
                   text-black hover:text-white mr-4'>
                    Contact
                  </Link>
                </div>

              </Button>
            {
              !auth.currentUser ?

              <Button className='p-3 m-3 bg-slate-400 rounded justify-center'>
                <div>
                  <Link to="/" onClick={ () => { signInOnClick()}} className="flex place-items-center
                      lg:inline-block lg:mt-0 text-black hover:text-white">
                        Sign In
                      </Link>
                </div>
              </Button>
              :
              <Button className='p-3 m-3 bg-slate-400 rounded justify-center'>
                <div>
                  <Link to="/" onClick={ () => { signOutOnClick()}} className="flex place-items-center
                      lg:inline-block lg:mt-0 text-black hover:text-white">
                        Sign Out
                      </Link>
                </div>
              </Button>
            }

            </div>
          </div>
          ) : ( 
          <></>
        )}
    </nav>
  )
}

export default Navbar