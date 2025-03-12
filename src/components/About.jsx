
export default function About() {
  return (
    <div className='py-10' id="about">
        <div className="flex md:flex-row flex-col w-11/12 mx-auto gap-10">
            <div className="md:w-1/2 shadow-xl rounded-md p-5">
                <h2 className="text-3xl font-bold mb-2"> <span className="text-gray-500">About </span> me </h2>
                <p className='text-justify leading-relaxed'> Hi, I'm <span className="text-primary font-semibold">Jihadur Rahman Noyon</span>, a Junior Web Developer, currently working with <span className="text-primary font-semibold"> Islamic Online Madrasah (IOM) </span> since May 2023. I like to create Project using ReactJS, MongoDB, NodeJS & ExpressJS. I can work smoothly both Tailwind CSS and Bootstrap. <br /> <br />

                I'm highly passionate about website performance, clean code and reusable code. If you interested my working technology, feel free to contact with me. Let's create something Amazing together! </p>
            </div>
            <div className="md:w-1/2 shadow-xl rounded-md p-5">
                <h2 className="text-3xl font-bold mb-2"> <span className="text-gray-500">Personal </span> Information </h2>
                <ul className='flex flex-col gap-2 mb-5'>
                    <li> <b className="inline-block w-40 text-primary"> Name  </b>  <span> : Jihadur Rahman Noyon </span> </li>
                    <li> <b className="inline-block w-40 text-primary"> Father's Name  </b> : <span> Anwar Hosen </span> </li>
                    <li> <b className="inline-block w-40 text-primary"> Mother's Name  </b>  : <span> Fatema Jinnah </span> </li>
                    <li> <b className="inline-block w-40 text-primary"> Address  </b>  <span> : Bhaluka, Mymensingh </span> </li>
                    <li> <b className="inline-block w-40 text-primary"> Date of Birth  </b>  : <span> 02-06-1998 </span> </li>
                    <li> <b className="inline-block w-40 text-primary"> Religion  </b> : <span> Islam </span> </li>
                    <li> <b className="inline-block w-40 text-primary"> Marital Status  </b> : <span> Unmarried </span> </li>
                </ul>
                <a href="#" className="btn btn-primary mt-2 btn-wide hover:btn-error"> Download Resume </a>
            </div>


        </div>
    </div>
  )
}
