import { CustomButton } from '../button/CustomButton'
import './bulb.css'

export const BulbStyle = () => {
  return (
    <div className="light-button">
  <button className="bt">
    <div className="light-holder">
      <div className="dot"></div>
      <div className="light"></div>
    </div>
    <div className="button-holder">
      <p className='text-xl font-caveat'> Dear Sir / Madam </p>
          <p className=''>Ologunagba Olajide</p>
          <CustomButton/> 
    </div> 
  </button>
</div>

  )
}
