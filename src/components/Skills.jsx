import { RadialProgress } from 'react-radial-progress-indicator';

export default function Skills() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-green-50 to-pink-50 py-10">
      <div className="mx-auto w-11/12">
      <div className="md:text-5xl text-3xl text-center mb-5">
                <h2 className="border-bottom">My <span className='text-orange-400'>Skills</span></h2>
            </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-10">
          {/* HTML Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <RadialProgress
              backgroundColour="#dff0d8"
              backgroundTransparent
              duration={2000}
              fontRatio={8}
              height={100}
              ringBgColour="#ccc"
              ringFgColour="#E34F26" // HTML red color
              ringIntermediateColour="#aaa"
              ringThickness={0.2}
              segmented
              showIntermediateProgress
              startStep={0}
              step={50} // Junior level
              steps={100}
              text={(steps, proportion) => `${Math.floor(100 * proportion)}%`}
              width={100}
              className="mx-auto"
            />
            <p className="text-[#E34F26]">HTML</p> {/* HTML red text */}
          </div>
          
          {/* CSS Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <RadialProgress
              backgroundColour="#dff0d8"
              backgroundTransparent
              duration={2000}
              fontRatio={8}
              height={100}
              ringBgColour="#ccc"
              ringFgColour="#1572B6" // CSS blue color
              ringIntermediateColour="#aaa"
              ringThickness={0.2}
              segmented
              showIntermediateProgress
              startStep={0}
              step={50} // Junior level
              steps={100}
              text={(steps, proportion) => `${Math.floor(100 * proportion)}%`}
              width={100}
              className="mx-auto"
            />
            <p className="text-[#1572B6]">CSS</p> {/* CSS blue text */}
          </div>
          
          {/* Tailwind CSS Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <RadialProgress
              backgroundColour="#dff0d8"
              backgroundTransparent
              duration={2000}
              fontRatio={8}
              height={100}
              ringBgColour="#ccc"
              ringFgColour="#06B6D4" // Tailwind CSS blue color
              ringIntermediateColour="#aaa"
              ringThickness={0.2}
              segmented
              showIntermediateProgress
              startStep={0}
              step={50} // Junior level
              steps={100}
              text={(steps, proportion) => `${Math.floor(100 * proportion)}%`}
              width={100}
              className="mx-auto"
            />
            <p className="text-[#06B6D4]">Tailwind CSS</p> {/* Tailwind CSS blue text */}
          </div>

          {/* JavaScript Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <RadialProgress
              backgroundColour="#dff0d8"
              backgroundTransparent
              duration={2000}
              fontRatio={8}
              height={100}
              ringBgColour="#ccc"
              ringFgColour="#F7DF1E" // JavaScript yellow color
              ringIntermediateColour="#aaa"
              ringThickness={0.2}
              segmented
              showIntermediateProgress
              startStep={0}
              step={50} // Junior level
              steps={100}
              text={(steps, proportion) => `${Math.floor(100 * proportion)}%`}
              width={100}
              className="mx-auto"
            />
            <p className="text-[#F7DF1E]">JavaScript</p> {/* JavaScript yellow text */}
          </div>

          {/* ReactJS Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <RadialProgress
              backgroundColour="#dff0d8"
              backgroundTransparent
              duration={2000}
              fontRatio={8}
              height={100}
              ringBgColour="#ccc"
              ringFgColour="#61DBFB" // ReactJS light blue color
              ringIntermediateColour="#aaa"
              ringThickness={0.2}
              segmented
              showIntermediateProgress
              startStep={0}
              step={50} // Junior level
              steps={100}
              text={(steps, proportion) => `${Math.floor(100 * proportion)}%`}
              width={100}
              className="mx-auto"
            />
            <p className="text-[#61DBFB]">ReactJS</p> {/* ReactJS light blue text */}
          </div>

          {/* Backend Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <RadialProgress
              backgroundColour="#dff0d8"
              backgroundTransparent
              duration={2000}
              fontRatio={8}
              height={100}
              ringBgColour="#ccc"
              ringFgColour="#333" // Backend gray color
              ringIntermediateColour="#aaa"
              ringThickness={0.2}
              segmented
              showIntermediateProgress
              startStep={0}
              step={50} // Junior level
              steps={100}
              text={(steps, proportion) => `${Math.floor(100 * proportion)}%`}
              width={100}
              className="mx-auto"
            />
            <p className="text-[#333]">Backend</p> {/* Backend gray text */}
          </div>

          {/* Firebase Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <RadialProgress
              backgroundColour="#dff0d8"
              backgroundTransparent
              duration={2000}
              fontRatio={8}
              height={100}
              ringBgColour="#ccc"
              ringFgColour="#FFCA28" // Firebase yellow color
              ringIntermediateColour="#aaa"
              ringThickness={0.2}
              segmented
              showIntermediateProgress
              startStep={0}
              step={50} // Junior level
              steps={100}
              text={(steps, proportion) => `${Math.floor(100 * proportion)}%`}
              width={100}
              className="mx-auto"
            />
            <p className="text-[#FFCA28]">Firebase</p> {/* Firebase yellow text */}
          </div>

          {/* Github Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <RadialProgress
              backgroundColour="#dff0d8"
              backgroundTransparent
              duration={2000}
              fontRatio={8}
              height={100}
              ringBgColour="#ccc"
              ringFgColour="#333" // Github black color
              ringIntermediateColour="#aaa"
              ringThickness={0.2}
              segmented
              showIntermediateProgress
              startStep={0}
              step={50} // Junior level
              steps={100}
              text={(steps, proportion) => `${Math.floor(100 * proportion)}%`}
              width={100}
              className="mx-auto"
            />
            <p className="text-[#333]">Github</p> {/* Github black text */}
          </div>
        </div>
      </div>
    </div>
  );
}
