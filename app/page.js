import Image from "next/image";

import rickAndMorty from "../public/Rick-and-Morty.jpg";

export default function Home() {
  return (
    <>
      <p>
        Rick and Morty Page
        <br />
        Welcome to the page, check out some of the characters
      </p>

      <Image src={rickAndMorty} alt="Rick and Morty" width={500} height="auto" />
    </>
  );  
}
