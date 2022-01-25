import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback 2",
      rating: 7,
    },
    {
      id: 3,
      text: "This is feedback 3",
      rating: 8,
    },
  ]);
  const [feedbackEdit, setfeedbackEdit] = useState({
    item: "",
    edit: false,
  });
  //delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //edit item
  const handleEdit = (item) => {
    setfeedbackEdit({
      item,
      edit: true,
    });
  };
  //update item
  const updateItem = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        handleEdit,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
