import { Inter } from "next/font/google";
import Redirect from "@/components/Redirect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Redirect route=""/>
    </>
  );
}
