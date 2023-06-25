import Head from "next/head";
import { poppins } from "@/utils/fonts";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Kaja Bonowicz</title>
                <meta name="description" content="Zapisy na paznokcie do Kai Bonowicz." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/kb_logo.svg" />
            </Head>
            <main className={" " + poppins.className}>
                {children}
            </main>
        </>
    );
}

export default Layout;