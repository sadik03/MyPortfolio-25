import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project?</p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:mssadik03@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:mssadik03@gmail.com">mssadik03@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919630576848">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+919630576848">(+91) 6204662875</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
