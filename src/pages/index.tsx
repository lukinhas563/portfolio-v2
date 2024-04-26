import "../services/translations";

import { Inter } from "next/font/google";
import Container from "@/components/container/Container";
import NavBar from "@/components/navBar/NavBar";
import Header from "@/components/header/Header";
import Slide from "@/components/slide/Slide";
import Section from "@/components/section/Section";
import FormContainer from "@/components/formContainer/FormContainer";
import Form from "@/components/form/Form";
import Footer from "@/components/foot/Foot";
import Button from "@/components/button/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Icon from "@/components/icons/Icon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Button
        className="fixed bottom-10 right-10"
        onClick={() => router.push("#nav-bar")}
      >
        <Icon name="arrowup" color="#fff" />
      </Button>
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
      <Footer />
    </>
  );
}
