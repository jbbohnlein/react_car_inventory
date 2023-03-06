import Background from '../assets/images/parking_garage.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-bottom height-100'>
        <div className='flex place-items-start h-screen p-20'>
          <h3 className='p-5 bg-yellow-200 bg-opacity-75 text-black rounded'>Welcome to Your Car Inventory</h3>
        </div>
    </div>
  )
}

export default Home