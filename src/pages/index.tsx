import "../utils/translations";

import { Inter } from "next/font/google";
import Header from "@/components/layouts/header/Header";
import Container from "@/components/common/container/Container";
import Menu from "@/components/layouts/menu/Menu";
import Slide from "@/components/layouts/slide/Slide";
import About from "@/components/layouts/about/About";
import Projects from "@/components/layouts/projects/Projects";
import Contact from "@/components/layouts/contact/Contact";
import Footer from "@/components/layouts/footer/Footer";
import { ValidateService } from "@/services/ValidateService";
import { EmailService, EmailTemplate } from "@/services/EmailService";
import Head from "next/head";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  if (!process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID) {
    throw new Error("NEXT_PUBLIC_EMAIL_SERVICE_ID is not defined");
  }

  if (!process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID) {
    throw new Error("NEXT_PUBLIC_EMAIL_TEMPLATE_ID is not defined");
  }

  if (!process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY) {
    throw new Error("NEXT_PUBLIC_EMAIL_PUBLIC_KEY is not defined");
  }

  const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

  const emailService = new EmailService({ serviceID, templateID, publicKey });

  const validateService = new ValidateService();

  return (
    <>
      <Head>
        <title>Lucas Montenegro Alves | Desenvolvedor Back-end</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Desenvolvedor back-end especializado em C# e ASP.NET. Confira meus projetos e entre em contato para discutir novas oportunidades."
        />
        <meta
          name="keywords"
          content="desenvolvedor back-end, C#, ASP.NET, APIs, Docker, Microserviços, PostgreSQL, RabbitMQ, Nodejs, Python"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.lucasmontenegro.vercel.app"
        />
        <meta
          property="og:title"
          content="Lucas Montenegro Alves | Desenvolvedor Back-end"
        />
        <meta
          property="og:description"
          content="Desenvolvedor especializado em soluções back-end com C# e ASP.NET. Veja meu portfólio de projetos e entre em contato."
        />

        <link rel="canonical" href="https://www.lucasmontenegro.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="light-element-1 absolute bg-[#2D235C] h-[50rem] w-[50rem] left-[-20rem] top-[-20rem] rounded-full blur-3xl" />
      <div className="light-element-2 absolute bg-[#fff5b636] h-[20rem] w-[20rem] left-[-10rem] top-[20rem] rounded-full blur-3xl" />
      <div className="light-element-3 absolute bg-[#3c2d76] h-[25rem] w-[25rem] left-[20rem] top-[-10rem] rounded-full blur-3xl" />

      <div className="light-element-4 absolute bg-[#2D235C] h-[50rem] w-[50rem] right-[-20rem] bottom-[-30rem] rounded-full blur-3xl" />

      <Container>
        <Menu />
        <Header />
      </Container>
      <Slide />
      <Slide direction="right" />
      <Container>
        <About />
        <Projects />
        <Contact
          emailService={emailService}
          validateService={validateService}
        />
        <Footer />
      </Container>
    </>
  );
}
