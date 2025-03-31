
//import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list"
// const delay=(ms)=>
//   new Promise ((resolve)=> setTimeout(resolve,ms));
const Home = async () => {

  const latestProducts= await getLatestProducts();
  // await delay(2000)
  return (<div>
    <ProductList data={latestProducts} title="Newest Arrivals" 
    />
    </div>
  )
}

export default Home;