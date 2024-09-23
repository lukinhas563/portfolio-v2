import "../services/translations";

import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import Container from "@/components/common/container/Container";
import NavBar from "@/components/layouts/navBar/NavBar";
import Header from "@/components/layouts/header/Header";
import Slide from "@/components/layouts/slide/Slide";
import Section from "@/components/layouts/section/Section";
import FormContainer from "@/components/common/formContainer/FormContainer";
import Form from "@/components/layouts/form/Form";
import Footer from "@/components/layouts/foot/Foot";
import Icon from "@/components/icons/Icon";
import Head from "next/head";
import Button from "@/components/common/button/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Lucas Montenegro | Desenvolvedor Back-end</title>
        <meta
          name="keywords"
          content="Desenvolvedor, web, back-end, full-stack, front-end, React, Next, Lucas Montenegro, C#, Java, JavaScript, .NET, Python, CSharp, DotNet"
        />
        <meta
          name="description"
          content="Portfolio Desenvolvedor Back-end de Lucas Montenegro Alves. Entre em contato com o e-mail lucasmontenegro475@gmail.com"
        />
        <meta name="author" content="Lucas Montenegro Alves"></meta>
      </Head>
      <Button
        className="fixed bottom-10 right-10 z-50"
        onClick={() => router.push("#nav-bar")}
      >
        <Icon name="arrowup" color="#fff" />
      </Button>
      <NavBar />

      <Container>
        <Header />
      </Container>

      <Slide />

      <Section />

      <FormContainer>
        <Form />
      </FormContainer>
      <Footer />
    </>
  );
}
