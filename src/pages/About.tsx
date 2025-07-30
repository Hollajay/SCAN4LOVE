import coupleimg from '../assets/images/img6.png'
import coupleimg1 from '../assets/images/image 1 (1).jpg'

export const About = () => {
  return (
    <div className='space-y-9'>
      <div className="">
      <div className="pl-12 w-full flex items-end"><img className='w-full h-full' src={coupleimg} alt="" /></div>
      <div className='p-3'>
        <h1 className="text-2xl font-spicy text-secondary">FIRST MEET</h1>
        <p className='text-lg text-secondary'>2021</p>
        <p className='text-lg font-satisfy text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit, repudiandae dolorum enim eos quidem fuga eius odit assumenda aliquid quibusdam. Officia unde aperiam minima.</p>
      </div>
    </div>

    <div className="">
      <div className="w-full flex items-end pr-12 "><img className='w-full h-full' src={coupleimg1} alt="" /></div>
      <div className='p-3 '>
        <h1 className="text-2xl text-right font-spicy text-secondary">INTRODUCTION</h1>
        <p className='text-lg text-right text-secondary'>25 - 01 - 2022</p>
        <p className='text-lg font-satisfy text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit, repudiandae dolorum enim eos quidem fuga eius odit assumenda aliquid quibusdam. Officia unde aperiam minima.</p>
      </div>
    </div>

    </div>
    
  )
}
