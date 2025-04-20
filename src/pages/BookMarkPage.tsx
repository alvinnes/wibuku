import Hr from "../components/Elements/Hr";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";

const BookMarkPage = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center">
      <Navbar />
      <div className="mt-30 flex w-10/12 flex-col items-center">
        <h2 className="self-start text-3xl font-semibold text-white">
          Bookmark
        </h2>
        <Hr />
        <h2 className="text-2xl my-20 font-semibold text-white">Cooming Soon Feature!</h2>
      </div>
      <Footer className="absolute bottom-0"/>
    </section>
  );
};

export default BookMarkPage;
