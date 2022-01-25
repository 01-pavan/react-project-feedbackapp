import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedBackContext";
function FeedbackItem({ item }) {
  const { deleteFeedback, handleEdit } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => handleEdit(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
