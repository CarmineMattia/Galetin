import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="sms:+38163434449">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>Vojislava Bakića 6,</Para>
              <Para>Sombor 25000,</Para>
              <Para>Srbija</Para>
            </Col>
            {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/" left="true">
                {t("Application Security")}
              </Large>
              <Large left="true" to="/">
                {t("Software Principles")}
              </Large>
            </Col> */}
            {/* <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large left="true" to="/">
                {t("Support Center")}
              </Large>
              <Large left="true" to="/">
                {t("Customer Support")}
              </Large>
            </Col> */}
            {/* </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Vojislava Bakića 6,</Para>
              <Para>Sombor 25000,</Para>
              <Para>Srbija</Para>
            </Col> */}
            {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large left="true" to="/">
                {t("About")}
              </Large>
              <Large left="true" to="/">
                {t("Blog")}
              </Large>
              <Large left="true" to="/">
                {t("Press")}
              </Large>
              <Large left="true" to="/">
                {t("Careers & Culture")}
              </Large>
            </Col> */}
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="serbia.png"
                    aria-label="homepage"
                    width="40px"
                    height="40px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("sr")}>
                  <SvgIcon
                    src="united-kingdom.png"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="galetin-logo-inverted.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="hhttps://www.google.com/maps/place/STAKLOREZAC+GALETIN/@45.7827588,19.1191652,17z/data=!3m1!4b1!4m6!3m5!1s0x475cb5d8be36bdb9:0xb4236a016b503940!8m2!3d45.7827551!4d19.1217455!16s%2Fg%2F11_q5yxsc?entry=ttu"
                src="locate-outline.svg"
              />
              <SocialLink
                href="https://www.google.com/maps/place/STAKLOREZAC+GALETIN/@45.7827551,19.1217455,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMZQfHr-9qD9lqSde3xsj9qggMiEcs4YoHunLOm!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMZQfHr-9qD9lqSde3xsj9qggMiEcs4YoHunLOm%3Dw203-h360-k-no!7i2604!8i4624!4m9!3m8!1s0x475cb5d8be36bdb9:0xb4236a016b503940!8m2!3d45.7827551!4d19.1217455!10e5!14m1!1BCgIgARICGAI!16s%2Fg%2F11_q5yxsc?entry=ttu"
                src="logo-google.svg"
              />
              <SocialLink href="tel:+38163434449" src="call-outline.svg" />
              <SocialLink
                href="viber://chat?number=%2B38163434449"
                src="icons8-viber-96.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
