import ChatUI from '../components/ChatUI';

export async function getStaticProps() {
  return {
    props: {
      title: "Home",
    },
  };
}

export default function Home() {
  return (
    <ChatUI />
  );
}