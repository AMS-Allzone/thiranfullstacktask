"use client";
import { useParams } from "next/navigation";
import Task01 from "../Layouts/Task01";
import Task02 from "../Layouts/Task02";
import Task03 from "../Layouts/Task03";
import Task04 from "../Layouts/Task04";


const tasks = [
   { title: "Task 1 - Find the minimum fee ", Component:<Task01/> },
   { title: "Task 2 - iPod Purchase Cost Calculator", Component:<Task02/> },
   { title: "Task 3 - generateParentheses", Component:<Task03/> },
   { title: "Task 4 - Find the Minimum Operation", Component:<Task04/> },
];

export default function TaskPage() {
  const { id } = useParams();
  const task = tasks[id-1];

  if (!task) {
    return <h1 className="text-[var(--text-primary)] text-xl text-center">Task Not Found!</h1>;
  }

  return (
    <div>
     {task.Component}
    </div>
  );
}
