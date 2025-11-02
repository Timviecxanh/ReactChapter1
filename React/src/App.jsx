import Header from "./header";
import Banner from "./banner";
import Item from "./item";
import Footer from "./footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Banner />
        <Item />
      </main>
      <Footer />
    </div>
  );
}
