'use client'
import { useRouter } from "next/navigation";
import CustomeButton from "../Mui/CustomButton"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



export default function HomeBackButton(){
    const router = useRouter();
    
  const goHome = () => {
   
      router.push(`/`);
   
  };
    return(
        <main className="w-56 mx-auto">
            <div className="my-20 ">
        <CustomeButton onClick={goHome} variant={"outlinedPrimary"} startIcon={<ArrowBackIosIcon/>} label="Home" />
      </div>
        </main>
    )
}