import Image from "next/image";
import '@mantine/core/styles.css';
import { Button, MantineProvider } from "@mantine/core";
import { Button as But } from "@/components/ui/button";
import Header from "./_header/Header";
import AboutMe from "./_about_me/AboutMe";
export default function Home() {
  return (
    <div className="main-container container_wrapper overflow-x-hidden">
      <Header/>
      <AboutMe/>
    </div>
  );
}
