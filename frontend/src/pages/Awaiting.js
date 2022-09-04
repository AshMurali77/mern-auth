import construct from "../assets/construction.svg";
import { Container, Image } from "react-bootstrap";

const Awaiting = () => {
  return (
    <section className="mt-5">
      <Container className="text-center">
        <h2 className="display-2 fw-bold">Coming Soon!</h2>
        <Image className="mt-3" fluid src={construct} alt="error image" />
      </Container>
    </section>
  );
};

export default Awaiting;
