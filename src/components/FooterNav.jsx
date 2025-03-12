import { FaBox, FaEnvelope, FaGraduationCap, FaHome, FaUser } from "react-icons/fa";

export default function FooterNav() {
  return (
    <div className="dock bg-neutral text-white md:hidden">

    <a href='#about'>
        <FaUser className="mb-1"></FaUser>
        <span className='text-xs'>About</span>
    </a>
    <a href='#skills'>
        <FaGraduationCap className="mb-1" />
        <span className='text-xs'>Skills</span>
    </a>
    <a href='#home'>
        <FaHome className="mb-1"></FaHome>
        <span className='text-xs'>Home</span>
    </a>
    <a href='#portfolio'>
        <FaBox className="mb-1" />
        <span className='text-xs'>Portfolio</span>
    </a>
    <a href='#experience'>
        <FaEnvelope className="mb-1" />
        <span className='text-xs'>Experience</span>
    </a>
  

</div>
  )
}
