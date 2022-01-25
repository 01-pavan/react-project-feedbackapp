import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <h1>About</h1>
      <p>This App Is Built Using React with ❤️ by Pavan Kumar</p>
      <p>Version 1.0.0</p>
      <Link to="/">Back to Home</Link>{" "}
      {/*if we use <a></a> then it refreshes the browser every time we click*/}
    </Card>
  );
}

export default AboutPage;
