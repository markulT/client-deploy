import {Head, Html, Main, NextScript} from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang={'eng'}>
            <Head>
                <title>Rest TV</title>
                <meta name="description" content="Rest TV - это платформа созданная для людей!"/>
                <link rel="icon" href="/favicon.ico"/>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <Script id="ion-icons" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
                <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="robots" content="noindex" />
            </Head>
            <body>
                <Main />
            <NextScript />
            </body>
        </Html>
    )
}