import Card from "react-bootstrap/Card";

const PlayerCard = ({name, img, statistics}) => {
  return (
    <Card className="rounded-2 m-auto player-card "role="button">
      <Card.Img className="player-logo" variant="top" src={img} />
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
