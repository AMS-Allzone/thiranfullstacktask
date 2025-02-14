'use client'
import React, { useState } from 'react';
import CustomeButton from '../Mui/CustomButton';
import CustomTextField from '../Mui/CustomTextField';
import { Container } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import HomeBackButton from './HomeBackButton';

export default function Task03() {
  const [n, setN] = useState(1);
  const [combinations, setCombinations] = useState([]);

  const formik = useFormik({
      initialValues: {
        n: 1,
        // units: ""
      },
      validationSchema: Yup.object({
        // country: Yup.string().required("Country is required"),
        n: Yup.number()
          .typeError("n must be a number")
          .required("N is required")
          .min(1, "N value atleast 1")
          .max(10, "N value maximum 10")
          
      }),
      onSubmit: (values) => {
       console.log("n:", values)
        handleGenerate(values?.n);
      }
  })

  const generateParentheses = (n) => {
    const result = [];
    const backtrack = (current, openCount, closeCount) => {
      if (current.length === 2 * n) {
        result.push(current);
        return;
      }
      if (openCount < n) {
        backtrack(current + '(', openCount + 1, closeCount);
      }
      if (closeCount < openCount) {
        backtrack(current + ')', openCount, closeCount + 1);
      }
    };
    backtrack('', 0, 0);
    return result;
  };

  const handleGenerate = (n) => {
    const combos = generateParentheses(n);
    setCombinations(combos);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }} className="min-h-screen bg-[var(--color-bg)] flex flex-col items-center justify-center w-1/2">
          <form onSubmit={formik.handleSubmit}> 
      <div className="bg-[var(--card-bg)] border border-[var(--main-stroke)] p-8 rounded-lg shadow-md ">
        <h1 className="text-2xl font-bold mb-4 text-center text-[var(--text-primary)]">Balanced Parentheses Generator</h1>
             <div>

             </div>

        <div className="mb-4">
          {/* <label className="block text-[var(--text-secondary)]">Enter the value of n:</label> */}
          <CustomTextField
          label="Enter the value of n"
          value={formik.values.n}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="n"
          // type="number"
          error={formik.touched.n && Boolean(formik.errors.n)}
          helperText={formik.touched.n && formik.errors.n}



          
            // onChange={(e) => setN(Number(e.target.value))}
            // className="mt-1 p-2 w-full border rounded-md"
            // min="1"
            />
        </div>
        <CustomeButton
        label="Generate Sybmbol"
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        />
      </div>
      {combinations.length > 0 && (
        <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md  mt-6">
          <h2 className="text-xl font-bold mb-4 text-center text-[var(--text-primary)]">Combinations:</h2>
          <div className="max-h-64 overflow-y-auto">
            {combinations.map((combo, index) => (
              <p key={index} className="font-mono text-lg">
                {combo}
              </p>
            ))}
          </div>
        </div>
      )}
      </form>
      <HomeBackButton/>
    </Container>
  );
}


