import error from "../assets/error.svg";
import { Container, Image } from "react-bootstrap";

const Error = () => {
  return (
    <section className="mt-5">
      <Container className="text-center">
        <h2 className="display-2 fw-bold">Error 404: Page Not Found</h2>
        <Image fluid src={error} alt="error image" />
      </Container>
    </section>
  );
};

export default Error;
