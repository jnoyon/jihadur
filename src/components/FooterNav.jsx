import { FaBox, FaEnvelope, FaGraduationCap, FaHome, FaUser } from "react-icons/fa";

export default function FooterNav() {
  return (
    <div className="dock bg-neutral text-white md:hidden">

    <a href='#about'>
        <FaUser className="mb-1"></FaUser>
        <span className='text-xs'>About</span>
    </a>
    <a href='#about'>
        <FaGraduationCap className="mb-1" />
        <span className='text-xs'>Skills</span>
    </a>
    <a href='#about'>
        <FaHome className="mb-1"></FaHome>
        <span className='text-xs'>Home</span>
    </a>
    <a href='#about'>
        <FaBox className="mb-1" />
        <span className='text-xs'>Portfolio</span>
    </a>
    <a href='#about'>
        <FaEnvelope className="mb-1" />
        <span className='text-xs'>Contact</span>
    </a>
  

</div>
  )
}
