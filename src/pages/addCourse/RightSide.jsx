import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

const RightSide = () => {
  return (
    <div className=" space-y-5">
      <div className="flex gap-2 bg-blue-50 p-4 rounded border border-blue-500/20 w-2xs">
        <div>
          <p className="bg-blue-100 px-2 py-3 rounded-lg text-blue-500">
            <FaCircleExclamation />
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-2 text-accent">
            Auto-filled Information
          </h2>
          <p className="text-sm text-blue-500 font-bold ">
            Your name and email will be automatically saved with this course.
            The creation timestamp will also be recorded.
          </p>
        </div>
      </div>

      <div className=" bg-white p-4 rounded border border-blue-500/20 w-2xs">
        <h2 className="font-bold mb-3 text-accent">💡 Tips for Success</h2>
        <ul className=" pl-5 text-sm space-y-2">
          <li className="flex gap-1 items-center">
            <IoMdCheckmark className="text-green-500" /> Use clear, descriptive
            titles
          </li>
          <li className="flex gap-1 items-center">
            <IoMdCheckmark className="text-green-500" /> Write compelling
            descriptions
          </li>
          <li className="flex gap-1 items-center">
            <IoMdCheckmark className="text-green-500" /> Use high-quality images
          </li>
          <li className="flex gap-1 items-center">
            <IoMdCheckmark className="text-green-500" /> Be specific about
            duration
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
