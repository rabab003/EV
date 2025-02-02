 import './Background.css';
 import vid1 from '../../Assets/video1.mp4';
 import img1 from '../../Assets/image1.png';
 import img2 from '../../Assets/image2.png';
 import img3 from '../../Assets/image3.png';


const Background = ({playStatus, heroCount}) => {
  if(playStatus){
  return (
    <video className='background fade-in' autoPlay loop muted>
      <source src={vid1} type='video/mp4' />
      
    </video>
  ) 
 }
 else if(heroCount===0){
  return <img src={img1} className='background fade-in'/>
 }
 else if(heroCount===1){
  return <img src={img2} className='background fade-in'/>
 }
 else if(heroCount===2){
  return <img src={img3} className='background fade-in'/>
 }


}

export default Background
