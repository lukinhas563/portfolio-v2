import "../services/translations";

import { useRouter } from "next/router";
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
import Icon from "@/components/icons/Icon";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Lucas Montenegro | Desenvolvedor full-stack</title>
        <meta
          name="keywords"
          content="Desenvolvedor, web, back-end, full-stack, fron-end, React, Next, Lucas Montenegro"
        />
        <meta
          name="description"
          content="Portfolio Desenvolvedor Full-stack de Lucas Montenegro Alves.Entre em contato com o e-mail lucasmontenegro475@gmail.com"
        />
        <meta name="author" content="Lucas Montenegro Alves"></meta>
      </Head>
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
