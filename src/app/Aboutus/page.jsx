import React from "react";
import Image from "next/image";
import { FaRegHandPointRight } from "react-icons/fa6";
import shubham from "../assets/shubham.jpg";
import "./page.css";
const page = () => {
  return (
    <div>
      <div>
        <h1 className=" w-40 my-10 font-bold text-sm sm:text-4xl">About us </h1>
        <h1 className="w-80 my-2 text-sm sm:text-xl">Mr.Shubham Shrivas</h1>
        <h1 className="w-80 my-2 text-sm text-orange-600 sm:text-xl">
          (Founder-SSquareIT Training & Placement Service, Pune)
        </h1>
        <Image className="rounded-xl" src={shubham} alt="" />
      </div>
      <h1 className="sm:text-xl font-bold py-5 w-100 mx-auto text-sm ">
        We deal with the aspects of Trending IT Courses
      </h1>
      <p className="font-sans text-md">
        SSquareIT is the first training institute which provide training and
        premium placement support to all the IT Courses. Institute established
        in the year 2019 and till date more than 200+ Students started there
        career in IT Industry, with our excellent training program and great
        placement support. How our training program is better than any other
        training classes? We do have a corporate trainers having more than 8+
        Years of experience in corporate trainings. If any student looking to
        start the career in to IT Industry ,they face lot of confusion due to
        different educational background. Our training program is dedicated to
        all non-tech background students who are looking IT courses for Commerce
        ,Science,Arts,Pharma,Engineering etc. We have more than 50 Professional
        Trainers are working with us for providing training in Software
        Testing,Web Designing,SAP,Reactjs Developer etc. Any graduate student
        can take the online training from there remote locations. We do have
        dedicated team to support the students in overall development throughout
        the placement activity.
      </p>
      <h1 className="sm:text-xl font-bold py-5 w-100 mx-auto text-sm ">
        How we are committed to Placement after Training Program?
      </h1>
      <p className="text-md">
        As we mentioned ,we do have Premium Placement in all IT Courses. IT
        means that we do provide 468+ IT Companies internal openings to the
        students. During placement sessions, we teach the students...
      </p>
      <p className="mainfflex">
        <FaRegHandPointRight className="my-1 mx-3" />
        <p>How to make your CV?</p>
      </p>
      <p className="mainfflex">
        <FaRegHandPointRight className="my-1 mx-3" />
        <p>How to apply through Mail?</p>
      </p>
      <p className="mainfflex">
        <FaRegHandPointRight className="my-1 mx-3" />
        <p>How to apply through Naukri.Com.</p>
      </p>
      <p className="mainfflex">
        <FaRegHandPointRight className="my-1 mx-3" />
        <p>How to speak during interview?</p>
      </p>
      <p className="mainfflex">
        <FaRegHandPointRight className="my-1 mx-3" />
        <p>How to present during interview?</p>
      </p>
      <h1 className="sm:text-xl font-bold py-5 w-100 mx-auto text-sm ">
        We also placed students of other institutes like
      </h1>
      <p className="mainfflex">
        <FaRegHandPointRight className="my-1 mx-3" />
        <p>Velocity Training Institute ,Pune</p>
      </p>
      <p className="mainfflex">
        <FaRegHandPointRight className="my-1 mx-3" />
        <p>Q Spider</p>
      </p>
      <p className="mainfflex">
        <FaRegHandPointRight className="my-1 mx-3" />
        <p>Credence Institute</p>
      </p>
      <p className="mainfflex">
        <FaRegHandPointRight className="my-1 mx-3" />
        <p>Delphi Computech</p>
      </p>
      <p className="mainfflex">
        <FaRegHandPointRight className="my-1 mx-3" />
        <p>Primus Training Institute</p>
      </p>
      <p className="mainfflex">
        <FaRegHandPointRight className="my-1 mx-3" />
        <p>Seven Mentors</p>
      </p>
    </div>
  );
};

export default page;
