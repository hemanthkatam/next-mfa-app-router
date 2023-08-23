import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import "@/app/globals.css";
// import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
