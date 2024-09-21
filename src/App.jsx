import{
  Footer,Hero,CustomerReviews,PopularProducts,Services,Specailoffres,Subscribe,SuperQuality
}from "./section";
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <Specailoffres />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="bg-black padding x padding-t pb-8"><Footer/></section>
    </main>
  );
};
export default App;
