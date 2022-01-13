import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedbackData from "./data/FeedBackData";

function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
