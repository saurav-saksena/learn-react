import React from "react";
import Feedback from "./Forms/Feedback";
import "./App.css";
import RegistrationForm from "./Forms/RegistrationForm";
import MoreInput from "./Forms/MoreInput";
import CompleteForm from "./Forms/CompleteForm";
import SignUp from "./Forms/SignUp";

import Yes from "./components/Yes";

import Counter from "./components/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import UseStateRevision from "./pages/UseStateRevision";
import DataFetch from "./pages/DataFetch";
import NewsApi from "./pages/NewsApi";
import ExUseReducer from "./pages/ExUseReducer";
import ExUseReducer2 from "./pages/ExUseReducer2";
import ExUseReducer3 from "./pages/ExUseReducer3";
import MyTodos from "./pages/MyTodos";
import TaskApp from "./newToDo/TaskApp";
import Foodfilter from "./pages/Foodfilter";
import FilterProducts from "./pages/FilterProducts";

export default function App() {
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Yes />} />

          <Route path="/counter" element={<Counter />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/more-input" element={<MoreInput />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/complete-form" element={<CompleteForm />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/use-state" element={<UseStateRevision />} />
          <Route path="/data-fetch" element={<DataFetch />} />
          <Route path="/news-api" element={<NewsApi />} />
          <Route path="/reducer1" element={<ExUseReducer />} />
          <Route path="/reducer2" element={<ExUseReducer2 />} />
          <Route path="/reducer3" element={<ExUseReducer3 />} />
          <Route path="/mytodo" element={<MyTodos />} />
          <Route path="/task-app" element={<TaskApp />} />
          <Route path="/food-food" element={<Foodfilter />} />
          <Route path="/product-filter" element={<FilterProducts />} />
        </Routes>
      </Router>
    </>
  );
}

// export default function App() {
//   return (
//     <>

//      <Feedback />
//      <hr />
//      <RegistrationForm />
//      <hr />
//      <MoreInput />

//      <hr />
//      <CompleteForm />
//      <hr />
//      <hr />
//      <SignUp />
//     </>
//   );
// }
