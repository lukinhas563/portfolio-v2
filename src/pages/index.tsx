import { Inter } from "next/font/google";
import Container from "@/components/container/Container";
import NavBar from "@/components/navBar/NavBar";
import Header from "@/components/header/Header";
import Slide from "@/components/slide/Slide";
import Section from "@/components/section/Section";
import FormContainer from "@/components/formContainer/FormContainer";
import Form from "@/components/form/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />

      <Container>
        <Header />
      </Container>

      <Slide />

      <Container>
        <Section />
      </Container>

      <FormContainer>
        <Form />
      </FormContainer>
    </>
  );
}
