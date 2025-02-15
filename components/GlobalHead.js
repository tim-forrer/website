import Head from "next/head";
import { person } from "../public/me";

export default function GlobalHead() {
  return (
    <Head>
      <link rel="icon" href="/TF-logo.svg" />
      <meta
        name="description"
        content={`Website for ${person.name}`}
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          person.name,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={person.name} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}