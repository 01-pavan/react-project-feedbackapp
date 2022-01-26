import spinner from "../../assets/spinner.gif";
function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: "100px",
        margin: "auto",
        display: "block",
        background: "#202142",
      }}
    ></img>
  );
}

export default Spinner;
