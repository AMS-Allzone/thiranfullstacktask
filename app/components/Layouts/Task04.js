'use client'
import React, { useState } from 'react';
import CustomeButton from '../Mui/CustomButton';
import CustomTextField from '../Mui/CustomTextField';
import { Container } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import HomeBackButton from './HomeBackButton';

export default function Task04() {
  const [s, setS] = useState("geek");
  const [t, setT] = useState("gesek");
  const [editDistance, setEditDistance] = useState(null);

    const formik = useFormik({
        initialValues: {
          s: "geek",
          t:'gesek'
          // units: ""
        },
        validationSchema: Yup.object({
          // country: Yup.string().required("Country is required"),
          s: Yup.string()
            .typeError(" must be a String")
            .required("This field is required"),

          t: Yup.string()
            .typeError(" must be a String")
            .required("This field is required")
            
        }),
        onSubmit: (values) => {
         console.log("n:", values)
         handleCalculate(values?.s, values?.t);
        }
    })
  

  const minEditDistance = (s, t) => {
    const m = s.length, n = t.length;
    const dp = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(0));

    
    for (let i = 0; i <= m; i++) dp[i][0] = i; 
    for (let j = 0; j <= n; j++) dp[0][j] = j; 

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s[i - 1] === t[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1]; 
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]); 
        }
      }
    }
    return dp[m][n];
  };

  const handleCalculate = (s, t) => {
    setEditDistance(minEditDistance(s, t));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }} className=" bg-[var(--color-bg)] flex flex-col items-center justify-center w-1/2">
      <form onSubmit={formik.handleSubmit}>
      <div className="bg-[var(--card-bg)] border border-[var(--main-stroke)] p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-[var(--text-primary)]">
          Find Minimum Operation Calculator
        </h1>
        <div className="mb-4">
          <CustomTextField
            label="Enter first string (s)"
            // value={s}
            // onChange={(e) => setS(e.target.value)}


           
          value={formik.values.s}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="s"
          // type="number"
          error={formik.touched.s && Boolean(formik.errors.s)}
          helperText={formik.touched.s && formik.errors.s}
          />
        </div>
        <div className="mb-4">
          <CustomTextField
            label="Enter second string (t)"
            // value={s}
            // onChange={(e) => setS(e.target.value)}


           
          value={formik.values.t}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="t"
          // type="number"
          error={formik.touched.t && Boolean(formik.errors.t)}
          helperText={formik.touched.t && formik.errors.t}
          />
        </div>
        <CustomeButton
          label="Calculate Edit Distance"
          // onClick={handleCalculate}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        />
      </div>

      {editDistance !== null && (
        <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md  mt-6">
          <h2 className="text-xl font-bold mb-4 text-center text-[var(--text-primary)]">
            Minimum Operation Steps:
          </h2>
          <p className="text-center text-2xl font-semibold text-[var(--text-primary)]">
            {editDistance}
          </p>
        </div>
      )}
      </form>
      <HomeBackButton/>
    </Container>
  );
}
