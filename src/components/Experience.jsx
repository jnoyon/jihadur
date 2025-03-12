import { FaBriefcase, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-green-50 to-pink-50 py-10" id="experience">
      <div className="md:text-5xl text-3xl text-center mb-10 font-semibold">
      <h2 className="border-bottom"> Exper<span className='text-red-400'>ience</span></h2>
      </div>
      <VerticalTimeline lineColor="#ddd">
        {/* Islamic Online Madrasah */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#333",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(33, 150, 243)",
            borderRadius: "5px",
          }}
          date="2023 - present"
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold text-white">
            Islamic Online Madrasah
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-md font-medium text-white">
            Web Developer
          </h4>
          <p className="text-sm mt-2 text-white">
            Managing websites, ensuring smooth user experience and technical
            support. Building responsive and accessible web solutions.
          </p>
        </VerticalTimelineElement>

        {/* Sayedur Rahman School and College */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(233, 30, 99)",
            color: "#333",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(233, 30, 99)",
            borderRadius: "5px",
          }}
          date="2023 - Present"
          icon={<FaChalkboardTeacher />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold text-white">
            Sayedur Rahman School and College
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-md font-medium text-white">
            Assistance Teacher, ICT
          </h4>
          <p className="text-sm mt-2 text-white">
            Teaching ICT to students, managing the ICT lab and ensuring proper
            resource availability. Organizing workshops and seminars on
            digital literacy.
          </p>

        </VerticalTimelineElement>

        {/* ProjuktiLab Computer Training Center */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(76, 175, 80)",
            color: "#333",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(76, 175, 80)",
            borderRadius: "5px",
          }}
          date="2015 - Present"
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold text-white">
            ProjuktiLab Computer Training Center
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-md font-medium text-white">
            Trainer
          </h4>
          <p className="text-sm mt-2 text-white">
            Conducting Microsoft Office application training sessions. Helping
            students to improve their computer literacy and proficiency.
          </p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
