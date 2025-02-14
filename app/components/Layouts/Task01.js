'use client'
import { useState } from "react";
import CustomeButton from "../Mui/CustomButton";
import { Container } from "@mui/material";
import HomeBackButton from "./HomeBackButton";




const courses = {
  A: 1000,
  B: 5000,
  C: 10000,
  AB: 11000,
  AC: 9500,
  BC: 12000,
  ABC: 15000,
};

const findMinimumFee = () => {
  const combinations = [
    ["A", "B", "C"],
    ["AB", "C"],
    ["AC", "B"],
    ["BC", "A"],
    ["ABC"],
  ];

  let minFee = Infinity;
  let bestCombo = [];

  for (let combo of combinations) {
    let totalFee = combo.reduce((sum, course) => sum + (courses[course] || 0), 0);
    if (totalFee < minFee) {
      minFee = totalFee;
      bestCombo = combo;
    }
  }

  // let totalFee = combo.reduce((sum, course) => sum + (courses[course] || 0), 0);
  //   if (totalFee < minFee) {
  //     minFee = totalFee;
  //     bestCombo = combo;
  //   }

  return { minFee, bestCombo };
};

export default function Task01() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [minFee, setMinFee] = useState(null);
  const [bestCombo, setBestCombo] = useState([]);

  const handleSubmit = () => {
    const { minFee, bestCombo } = findMinimumFee();
    setMinFee(minFee);
    setBestCombo(bestCombo);
  };

  // console.log("bestCombo:", bestCombo)

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }} className=" bg-[var(--color-bg)] flex flex-col items-center justify-center w-1/2">
      <div className="border border-[var(--main-stroke)] p-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--text-heading)]">Cricket Course Selection</h2>

      <div className="grid grid-cols-3 gap-4 mb-4 ">
        {Object.keys(courses).map((course) => (
          <div
            key={course}
            className={`p-3 border border-[var(--main-stroke)] rounded-md text-center cursor-pointer ${
              (selectedCourses.includes(course) || bestCombo.includes(course)) ? "bg-blue-500 text-white" : "bg-[var(--secondary-card-container)]"
            }`}
            // onClick={() => {
            //   setSelectedCourses((prev) =>
            //     prev.includes(course) ? prev.filter((c) => c !== course) : [...prev, course]
            //   );
            // }}
          >
            {course} - ₹{courses[course]}
          </div>
        ))}
      </div>


      <CustomeButton
        // className=" bg-blue-600 text-white px-4 py-2 rounded-md w-full "
        onClick={handleSubmit}
        label="Find Minimum Fee"
      />

      {minFee !== null && (
        <div className="mt-5 p-4 bg-green-100 border-l-4 border-green-500">
          <h3 className="font-semibold text-green-700">Minimum Possible Fees:</h3>
          <p className="text-green-700">{bestCombo.join(", ")}</p>
          <p className="font-bold text-green-900">Minimum Fee: ₹{minFee}</p>
        </div>
      )}
      </div>
      <HomeBackButton/>
    </Container>
  );
}
