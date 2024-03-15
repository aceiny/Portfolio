import Image from "next/image";
import '@mantine/core/styles.css';
import { Button, MantineProvider } from "@mantine/core";
import { Button as But } from "@/components/ui/button";
import Header from "./_header/Header";
export default function Home() {
  return (
    <div className="main-container">
      <Header/>
    </div>
  );
}
