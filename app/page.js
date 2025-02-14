import Image from "next/image";
import TasK02 from './components/Layouts/Task02'
import CourseSelection from "./components/Layouts/Task01";
import Task03 from "./components/Layouts/Task03";
import EditDistanceCalculator from "./components/Layouts/Task04";
import HomePage from "./components/pages/HomePage";



export default function Home() {
  return (
    <div>
      <HomePage/>
      {/* <TasK02/>
      <CourseSelection/>
      <Task03/>
      <EditDistanceCalculator/> */}
    </div>
  );
}
