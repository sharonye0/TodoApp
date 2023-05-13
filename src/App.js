import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

let counter = 3;
const App = () => {
   const [courseGoals, setCourseGoals] = useState([
      { text: "Do all exercises!", id: "g2" },
      { text: "Finish the course!", id: "g1" },
   ]);

   const addGoalHandler = (enteredText) => {
      setCourseGoals((prevGoals) => {
         const updatedGoals = [...prevGoals];
         updatedGoals.unshift({ text: enteredText, id: `g${counter}` });
         counter++;
         return updatedGoals;
      });
   };

   const deleteItemHandler = (goalId) => {
      console.log(goalId);
      setCourseGoals((prevGoals) => {
         const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
         return updatedGoals;
      });
   };

   let content = (
      <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
   );

   if (courseGoals.length > 0) {
      content = (
         <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
      );
   }

   return (
      <div>
         <section id="goal-form">
            <CourseInput onAddGoal={addGoalHandler} />
         </section>
         <section id="goals">{content}</section>
      </div>
   );
};

export default App;
