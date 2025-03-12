import rokto from '../assets/images/rokto.webp'
import bg from '../assets/images/email-pattern.webp';

export default function Portfolio() {
  return (
    <div
          className=" bg-repeat bg-center  flex flex-col items-center justify-between py-10"
          style={{ backgroundImage: `url(${bg})` }} // Proper background image usage
        >
        <div className="mx-auto w-11/12">
            <div className="md:text-5xl text-3xl text-center mb-5">
                <h2 className="border-bottom">Port<span className='text-orange-400'>folio</span></h2>
            </div>
            <div className="grid md:grid-cols-3">
                <div className="backdrop-blur-sm shadow-md p-5 rounded-md flex gap-5 items-center">
                    <img src={rokto} alt="" className='w-40' />
                    <div className="content">
                        <h2> Rokto Dot Info </h2>
                        <p> Rokto dot </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
