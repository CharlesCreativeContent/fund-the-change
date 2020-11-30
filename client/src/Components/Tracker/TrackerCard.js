import { Card } from "react-bootstrap";

const TrackerCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
        <Card>Name: {props}</Card>
    </Card>
  );
};
export default TrackerCard;
