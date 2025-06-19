import React from "react";
import sectionImg from "../../../assets/images/office1.png";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router";

const ExtraSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-10 ">
        {/* left */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full rounded-2xl"
            src={sectionImg}
            alt="working two people in office"
          />
        </div>
        {/* right */}
        <div className="space-y-5 w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-accent/80">
            Become an Instructor
          </h2>
          <p className="text-accent">
            Join our community of expert instructors and share your knowledge
            with students around the world. Create engaging courses and earn
            revenue while making a difference.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <IoMdCheckmark className="text-indigo-500 bg-indigo-100 w-8 h-8 p-2 rounded-full mt-1 mr-2 flex-shrink-0" />
              <div>
                <strong className="font-semibold">
                  Reach millions of students
                </strong>
                <p className="text-accent/80 mt2">
                  Share your expertise with our global community of eager
                  learners.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <IoMdCheckmark className="text-indigo-500 bg-indigo-100 w-8 h-8 p-2 rounded-full mt-1 mr-2 flex-shrink-0" />
              <div>
                <strong className="font-semibold">Earn revenue</strong>
                <p className="text-accent/80 mt-2">
                  Get paid for your content with our competitive revenue share
                  model.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <IoMdCheckmark className="text-indigo-500 bg-indigo-100 w-8 h-8 p-2 rounded-full mt-1 mr-2 flex-shrink-0" />
              <div>
                <strong className="font-semibold">Comprehensive support</strong>
                <p className="text-accent/80 mt-2">
                  Get help with course creation, marketing, and technical
                  support.
                </p>
              </div>
            </li>
          </ul>
           <Link to='/add-course'> <button className="btn btn-primary">Start Teaching Today</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
