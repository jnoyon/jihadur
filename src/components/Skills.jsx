import { DiFirebase, DiJavascript } from 'react-icons/di';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-green-50 to-pink-50 py-10" id='skills'>
      <div className="mx-auto w-11/12">
      <div className="md:text-5xl text-3xl text-center mb-5">
          <h2 className="border-bottom">My <span className='text-red-400'>Skills</span></h2>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-10">
          {/* HTML Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <FaHtml5 className="text-[#E34F26] text-6xl" />
            <p className="text-[#E34F26]">HTML</p>
          </div>

          {/* CSS Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <FaCss3Alt className="text-[#1572B6] text-6xl" />
            <p className="text-[#1572B6]">CSS</p>
          </div>

          {/* Tailwind CSS Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <SiTailwindcss className="text-[#06B6D4] text-6xl" />
            <p className="text-[#06B6D4]">Tailwind CSS</p>
          </div>

          {/* JavaScript Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <DiJavascript className="text-[#F7DF1E] text-6xl"></DiJavascript>
            <p className="text-[#F7DF1E]">JavaScript</p>
          </div>

          {/* ReactJS Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <FaReact className="text-[#61DBFB] text-6xl" />
            <p className="text-[#61DBFB]">ReactJS</p>
          </div>

          {/* NodeJS Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <FaNodeJs className="text-[#339933] text-6xl" />
            <p className="text-[#339933]">NodeJS</p>
          </div>

          {/* Firebase Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <DiFirebase className="text-[#FFCA28] text-6xl" />
            <p className="text-[#FFCA28]">Firebase</p>
          </div>

          {/* Github Skill */}
          <div className="bg-white shadow rounded-md flex flex-col items-center gap-2 justify-center py-10">
            <FaGithub className="text-[#333] text-6xl" />
            <p className="text-[#333]">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}
