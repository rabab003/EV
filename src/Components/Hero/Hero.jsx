import './Hero.css';
import arrowBtn from '../../Assets/arrow_btn.png';
import playIcon from '../../Assets/play_icon.png';
import pauseIcon from '../../Assets/pause_icon.png';


const Hero = ({herDate ,setHeroCount, heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{herDate.text1}</p>
        <p>{herDate.text2}</p>
      </div>
      <div className='hero-explore'>
        <p>explre the features</p>
        <img src={arrowBtn} alt="" />
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
          <li onClick={()=> setHeroCount(0)} className={heroCount===0? "hero-dot orange": "hero-dot"}></li>
          <li onClick={()=> setHeroCount(1)} className={heroCount===1? "hero-dot orange": "hero-dot"}></li>
          <li onClick={()=> setHeroCount(2)} className={heroCount===2? "hero-dot orange": "hero-dot"}></li>
        </ul>
        <div className='heroPlay'>
           <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?pauseIcon:playIcon} alt="" />
           <p>see the video</p>
        </div>

      </div>
      
    </div>
  )
}

export default Hero
