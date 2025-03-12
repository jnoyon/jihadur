import rokto from '../assets/images/blood.png'
import techprod from '../assets/images/techprod.png'
import bg from '../assets/images/email-pattern.webp';

export default function Portfolio() {
  return (
    <div
      className="bg-repeat bg-center flex flex-col items-center justify-between py-10"
      style={{ backgroundImage: `url(${bg})` }} 
      id='portfolio'
    >
      <div className="mx-auto w-11/12">
        <div className="md:text-5xl text-3xl text-center mb-5">
          <h2 className="border-bottom">Port<span className='text-red-400'>folio</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {/* Rokto Dot Info Card */}
          <div className="backdrop-blur-sm bg-white shadow-md p-3 rounded-md flex flex-col gap-5 items-center">
            <div className="overflow-hidden">
              <h2 className="text-xl font-semibold bg-error text-white p-2 rounded-md mb-5">Rokto Dot Info (Mobile Version)</h2>
              <img src={rokto} alt="Rokto Dot Info" className="rounded-lg float-left w-80 mr-5" />
              <p className="text-gray-600 text-sm text-justify">
                Rokto Dot Info is a blood donor directory platform that connects blood donors with people in need of blood. It helps individuals easily find and contact blood donors by filtering based on blood group and location. The platform supports free blood donation programs and makes the process of finding blood donors quick and efficient.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="text-sm text-gray-500">
                <strong>Key Features:</strong>
                <ul className="list-disc ml-5">
                  <li>User Profiles with Photos, Donation History, and Last Donation Date</li>
                  <li>Blood Group Filtering</li>
                  <li>One-click Contact with Donors</li>
                  <li>Moderator System for Effective Platform Management</li>
                </ul>
              </div>
              <div className="text-sm text-gray-500">
                <strong>Technologies Used:</strong>
                <ul className="list-disc ml-5">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>Express & Node.js</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
            <a href="https://rokto.info" className="btn text-white btn-error">Visit Project</a>
          </div>

          {/* TechProd Card */}
          <div className="backdrop-blur-sm bg-white shadow-md p-3 rounded-md flex flex-col gap-5 items-center">
            <div className="overflow-hidden">
              <h2 className="text-xl font-semibold bg-error text-white p-2 rounded-md mb-5">TechProd</h2>
              <img src={techprod} alt="TechProd Website" className="rounded-lg float-left w-80 mr-5" />
              <p className="text-gray-600 text-sm text-justify">
                TechProd is a platform where users can discover and share their tech products such as web apps, AI tools, software, games, mobile apps, and more. It provides an easy-to-use interface for users to browse, share, and explore new and innovative tech products from around the world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="text-sm text-gray-500">
                <strong>Key Features:</strong>
                <ul className="list-disc ml-5">
                  <li>Discover a wide range of tech products</li>
                  <li>User-generated product sharing</li>
                  <li>Product categorization (Web Apps, AI tools, Games, etc.)</li>
                  <li>Search and filter by category, rating, etc.</li>
                </ul>
              </div>
              <div className="text-sm text-gray-500">
                <strong>Technologies Used:</strong>
                <ul className="list-disc ml-5">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>Express & Node.js</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
            <a href="https://tech-prod.surge.sh/" className="btn text-white btn-error">Visit Project</a>
          </div>
        </div>
      </div>
    </div>
  );
}
