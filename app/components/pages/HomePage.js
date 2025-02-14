"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Img from '../../Assets/Images/hat.gif'
import { Container, Card, CardContent, Typography, MenuItem, Select, Button, Autocomplete } from "@mui/material";
import CustomAutocomplete from "../Mui/CustomAutocomplete";
import CustomeButton from "../Mui/CustomButton";
import Typewriter from 'typewriter-effect';

export default function HomePage() {
  const router = useRouter();
  const [selectedTask, setSelectedTask] = useState("");

  const OptionsSet=[
    { title: "Task 1 - Find the minimum fee", value: 1 },
    { title: "Task 2 - iPod Purchase Cost Calculator", value: 2 },
    { title: "Task 3 - Generate Parentheses", value: 3 },
    { title: "Task 4 - Find the Minimum Operation", value: 4 },
  ]

  const handleEvaluate = () => {
    if (selectedTask) {
      router.push(`/task/${selectedTask}`);
    }
  };


  return (
    <Container sx={{ mt: 5 }}>
      <div className="p-4 text-center w-[40%] mx-auto flex flex-col justify-center items-center">
        {/* GIF Image */}
        <Image 
          src={Img} 
          alt="dhivagar" 
          width={200} 
        //   height={150} 
          unoptimized
          priority 
        //   style={{ margin: "auto" }}
        className="flex justify-center"
        style={{marginLeft:-50}}
/>
        
        <div className="border border-[var(--main-stroke)] px-8 py-4  bg-[var(--card-bg)]">

        <Typography variant="h5" fontWeight="bold" color="textPrimary" sx={{ mt: 2 }}>
        <Typewriter
  options={{
    strings: ["Hi, This is Dhivagar"," Welcome to my Task","Let's get started!"],
    autoStart: true,
    loop: true,
    delay:40,
  }}
/>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" className="text-var[var(--text-primary)]">
          Welcome to Thiran Full stack task evaluator
        </Typography>
        </div>

       
        {/* <Typography variant="h6" fontWeight="bold" sx={{ mt: 4, mb: 1 }}>
          I tried my best
        </Typography> */}
        <Typography fontWeight="semibold" sx={{ mt: 2, mb: 6 }}>
          I am looking forward to the next steps to contribute to Thiran Technologies.
        </Typography>

        {/* Dropdown Selection */}
        <CustomAutocomplete
  label="Select the Task to Evaluate"
  value={selectedTask}
  onChange={(newValue) => setSelectedTask(newValue)}
//   className=""
  options={OptionsSet}
/>

        {/* Evaluate Button */}
        <div  className="mt-4 w-full">

        <CustomeButton
          variant="contained"
         
          label="Evaluate"
          color="primary"
          fullWidth
          onClick={handleEvaluate}
          disabled={!selectedTask}
          />
        </div>
      </div>
    </Container>
  );
}
