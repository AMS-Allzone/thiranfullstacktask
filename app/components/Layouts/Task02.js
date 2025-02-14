"use client";
import { useState } from "react";
import { Container, Typography, Card, CardContent, Divider } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomTextField from "../Mui/CustomTextField";
import CustomAutocomplete from "../Mui/CustomAutocomplete";
import CustomeButton from "../Mui/CustomButton";
import HomeBackButton from "./HomeBackButton";

export default function Task02() {
  const [result, setResult] = useState(null);

  const options = [
    { title: "India", value: "India" },
    { title: "Sri Lanka", value: "Sri Lanka" }
  ];

  const indiaStock = 100, sriLankaStock = 100;
  
  const formik = useFormik({
    initialValues: {
      country: "",
      units: ""
    },
    validationSchema: Yup.object({
      country: Yup.string().required("Country is required"),
      units: Yup.number()
        .typeError("Units must be a number")
        .required("Units are required")
        .min(10, "Minimum order is 10 units")
        // .typeError("Units must be a number")
        // .required("Units are required")
        // .min(0, "Minimum order is 10 units")
        .test("multipleOf10", "Units must be in multiples of 10", value => value % 10 === 0)
        .test("stockLimit", "Not enough stock available", function (value) {
          const { country } = this.parent;
          if (country === "India" && value > indiaStock) return false;
          if (country === "Sri Lanka" && value > sriLankaStock) return false;
          return true;
        })
    }),
    onSubmit: (values) => {
      let n = values.units;
      let indiaPrice = 30000, sriLankaPrice = 25000, transportCost = 5000;
      let indiaTotal = n * indiaPrice;
      let sriLankaTotal = n * sriLankaPrice;

      let bestOption = { type: "India", cost: indiaTotal };
      if (sriLankaTotal < indiaTotal) bestOption = { type: "Sri Lanka", cost: sriLankaTotal };

      let minCost = Math.min(indiaTotal, sriLankaTotal);
      let mixedOption = null;
      let remainingIndiaStock = indiaStock, remainingSriLankaStock = sriLankaStock;

      for (let i = 0; i <= n; i += 10) {
        let buyFromIndia = i;
        let buyFromSriLanka = n - i;

        if (buyFromIndia > indiaStock || buyFromSriLanka > sriLankaStock) continue;

        let costFromIndia = buyFromIndia * indiaPrice;
        let costFromSriLanka = buyFromSriLanka * sriLankaPrice;
        let transportBlocks = Math.ceil(Math.max(0, buyFromIndia - indiaStock, buyFromSriLanka - sriLankaStock) / 10);
        let transportCostTotal = transportBlocks * transportCost;
        let totalCost = costFromIndia + costFromSriLanka + transportCostTotal;

        if (totalCost < minCost) {
          minCost = totalCost;
          mixedOption = { buyFromIndia, buyFromSriLanka, transportBlocks, totalCost };
          bestOption = { type: "Mixed Purchase", cost: totalCost };
          remainingIndiaStock = indiaStock - buyFromIndia;
          remainingSriLankaStock = sriLankaStock - buyFromSriLanka;
        }
      }

      if (bestOption.type === "India") remainingIndiaStock -= n;
      if (bestOption.type === "Sri Lanka") remainingSriLankaStock -= n;

      setResult({ ...values, indiaTotal, sriLankaTotal, mixedOption, bestOption, remainingIndiaStock, remainingSriLankaStock });
    }
  });
 // console.log("result:", result)
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }} className=" ">
    <div className="bg-[var(--card-bg)] p-4 border border-[var(--main-stroke)] rounded-lg flex flex-col w-full gap-4">
      <CardContent>
        <div className="mb-4 font-bold text-2xl text-[var(--text-primary)]">
          iPod Purchase Cost Calculator
        </div>

        <div className="flex flex-col gap-4">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
           <CustomAutocomplete 
              label="Select Country"
              value={formik.values.country}
              onChange={(value) => formik.setFieldValue("country", value)}
              options={options}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
            <CustomTextField
              label="Enter number of units (Multiples of 10)"
              value={formik.values.units}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="units"
              type="number"
              error={formik.touched.units && Boolean(formik.errors.units)}
              helperText={formik.touched.units && formik.errors.units}
            />
            <CustomeButton label="Calculate Minimum Cost" variant="containedPrimary" fullWidth type="submit" sx={{ py: 1.5, fontWeight: "bold", textTransform: "none" }}/>
              
          </form>
        </div>
        
        {result && (
          <Card sx={{ mt: 3, p: 2, borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Purchase Details
            </Typography>
            <Divider sx={{ my: 1 }} />

            <Typography>
              📍 Order Placed From: <strong>{result.country}</strong>
            </Typography>
            <Typography>
              🛒 Number of Units: <strong>{result.units}</strong>
            </Typography>

            <Typography>🇮🇳 Buy all from India: <strong>Rs. {result?.indiaTotal?.toLocaleString()}</strong></Typography>
            <Typography>🇱🇰 Buy all from Sri Lanka: <strong>Rs. {result?.sriLankaTotal?.toLocaleString()}</strong></Typography>

            {result?.mixedOption && (
              <>
                <Divider sx={{ my: 1 }} />
                <Typography variant="h6">🔄 Mixed Purchase</Typography>
                <Typography>Buy {result?.mixedOption.buyFromIndia} units from India</Typography>
                <Typography>Buy {result?.mixedOption.buyFromSriLanka} units from Sri Lanka</Typography>
                <Typography>🚚 Transport Blocks: {result?.mixedOption.transportBlocks}</Typography>
                <Typography fontWeight="bold">Total Cost: Rs. {result?.mixedOption.totalCost?.toLocaleString()}</Typography>
              </>
            )}

            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">
              ✅ Best Option: <strong>{result?.bestOption?.type} (Rs. {result?.bestOption?.cost?.toLocaleString()})</strong>
            </Typography>

            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">📦 Remaining Stock</Typography>
            <Typography>🇮🇳 India: <strong>{result?.remainingIndiaStock}</strong> units left</Typography>
            <Typography>🇱🇰 Sri Lanka: <strong>{result?.remainingSriLankaStock}</strong> units left</Typography>
          </Card>
        )}
      </CardContent>
    </div>
    <HomeBackButton/>
  </Container>
);
}
    
  
