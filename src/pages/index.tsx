import "../services/translations";

import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import Header from "@/components/layouts/header/Header";
import Container from "@/components/common/container/Container";
import Menu from "@/components/layouts/menu/Menu";
import Slide from "@/components/layouts/slide/Slide";
import About from "@/components/layouts/about/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="absolute bg-[#2D235C] h-[50rem] w-[50rem] left-[-20rem] top-[-20rem] rounded-full blur-3xl" />
      <div className="absolute bg-[#fff5b636] h-[20rem] w-[20rem] left-[-10rem] top-[20rem] rounded-full blur-3xl" />
      <div className="absolute bg-[#3c2d76] h-[25rem] w-[25rem] left-[20rem] top-[-10rem] rounded-full blur-3xl" />

      <div className="absolute bg-[#2D235C] h-[50rem] w-[50rem] right-[-20rem] bottom-[-30rem] rounded-full blur-3xl" />

      <Container>
        <Menu />
        <Header />
        <Slide />
        <Slide direction="right" />
        <About />
      </Container>
    </>
  );
}
