import { MdFacebook } from 'react-icons/md';
import photo from '../assets/images/photo.jpg';
import bg from '../assets/images/email-pattern.webp';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';


export default function Hero() {
  return (
    <div
      className=" bg-repeat bg-center min-h-screen flex items-center"
      style={{ backgroundImage: `url(${bg})` }} // Proper background image usage
    id='home'>
      
      <div className="flex gap-5 flex-col-reverse md:flex-row items-center mx-auto w-11/12">
        <div className="md:w-8/12 text-center text-gray-600">
          <h1 className="md:text-5xl text-3xl font-bold mb-2">Jihadur Rahman Noyon</h1>
          <h2 className="text-2xl">
            <Typewriter
              words={['Front-end Developer', 'Teacher', 'Junior Web Developer']}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <div className="flex justify-center gap-2 mt-2">
            <a href="https://www.facebook.com/jihadurrahman6">
              <MdFacebook className="text-2xl"></MdFacebook>
            </a>
            <a href="https://github.com/jnoyon">
              <BsGithub className="text-2xl"></BsGithub>
            </a>
            <a href="https://www.linkedin.com/in/jihadur/">
              <FaLinkedin className="text-2xl"></FaLinkedin>
            </a>
          </div>
        </div>
        <div className="md:w-4/12">
        <img
        src={photo}
        alt="Image"
        className="rounded-md md:w-80 md:h-80 w-40 h-40 border-6 border-gray-300 transition-all duration-300 ease-in-out hover:border-blue-500 transform rotate-5"
      />

        </div>
      </div>

    </div>
  );
}
