import Head from "next/head";

import HomePage from "@/pages-components/home-page";
import { poppins } from "@/utils/fonts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaja Bonowicz</title>
        <meta name="description" content="Zapisy na paznokcie do Kai Bonowicz." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kb_logo.svg" />
      </Head>
      <main className={" " + poppins.className}>
        <HomePage />
      </main>
    </>
  )
}
