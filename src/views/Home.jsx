import { Container } from "react-bootstrap";

export default () => {
    return (
      <div className="home">
        <Container className="text-center">
          <h1 className="pt-5">
            Bienvenido a <span className="fw-bold">Happy Cake</span> 🍰
          </h1>
          <h6> El lugar de los pasteles felices </h6>
          <div className="emoji">🎂
          </div>
        </Container>
      </div>
    );
  };
