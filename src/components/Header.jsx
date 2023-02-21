import { Container, Image } from "react-bootstrap";
import logo from "../assets/nba-logo.png";

const Header = () => {
  return (
    <Container>
      <Image src={logo} alt="" />
      <Image />
      <h1 className="my-2 display-4 fw-bold">NBA Legends</h1>
    </Container>
  );
};

export default Header;
