import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroimg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
// import Subtitle from "../shared/Subtitle";
import Subtitle from "./../shared/Subtitle";
import worldImg from "./../assets/images/world.png";

const home = () => {
  return (
    <>
      {/* /hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know before you go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens th door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Hero section end */}
    </>
  );
};

export default home;
