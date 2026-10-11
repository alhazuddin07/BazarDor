import AllProducts from "./components/AllProducts";
import Banner from "./components/Banner";
import TodaysDroppedPrice from "./components/TodaysDroppedPrice";
import TodaysHighRate from "./components/TodaysHighRate";


export default function Home() {
  return (
    <div>
      <Banner />
      <TodaysHighRate />
      <TodaysDroppedPrice />
      <AllProducts />
    </div>
  );
}
