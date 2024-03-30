import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="flex min-h-screen flex-1 flex-col items-center text-slate-800"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/carbon-fibre-big.png')",
        backgroundColor: "#0061b5",
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  );
}
