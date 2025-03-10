import { MdAddCall, MdFacebook } from 'react-icons/md'
import photo from '../assets/images/photo.jpg'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
export default function Hero() {
  return (
    <div className='bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-h-screen flex flex-col items-center justify-center'>
        <div className="flex gap-5 flex-col-reverse md:flex-row  items-center mx-auto w-11/12">
            <div className="md:w-8/12 text-center text-gray-600">
                <h1 className='md:text-5xl text-3xl font-bold mb-2'> Jihadur Rahman Noyon </h1>
                <h2 className='md:text-2xl'> Front-end Developer || Teacher </h2>
                <div className="flex justify-center gap-2 mt-2">
                    <a href="#"> <MdFacebook className='text-2xl'></MdFacebook> </a>
                    <a href="#"> <BsGithub className='text-2xl'></BsGithub> </a>
                    <a href="#"> <FaLinkedin className='text-2xl'></FaLinkedin> </a>
                </div>
            </div>
            <div className="md:w-4/12">
                <img src={photo} alt="Image" className='rounded-full md:w-80 md:h-80 w-40 h-40' />
            </div>
        </div>
    </div>
  )
}
