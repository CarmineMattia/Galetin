import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import { Button } from "../../common/Button";
import Block from "../Block";
import { ContactContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const handleCallClick = () => {
    window.location.href = "tel:+38163434449"; // This will trigger the phone call
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <Button onClick={handleCallClick}>{t("+381 63 434449")}</Button>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
