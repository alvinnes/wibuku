import Hr from "../components/Elements/Hr";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";

const ListAnimePage = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center">
      <Navbar />
      <div className="mt-30 flex w-10/12 flex-col items-center">
        <h2 className="self-start text-3xl font-semibold text-white">
          List Anime
        </h2>
        <Hr />
        <h2 className="my-20 text-2xl font-semibold text-white">
          Cooming Soon Feature!
        </h2>
      </div>
      <Footer className="absolute bottom-0" />
    </section>
  );
};

export default ListAnimePage;
