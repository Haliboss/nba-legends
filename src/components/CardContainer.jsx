import { Container } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <Container className="card-container">
      {data.map((player) => (
        <PlayerCard {...player} />
      ))}
    </Container>
  );
};

export default CardContainer;
