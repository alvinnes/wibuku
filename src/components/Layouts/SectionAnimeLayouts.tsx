import { ReactNode } from "react";
import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";
interface SectionAnimeLayoutProps {
  children: ReactNode;
  titlePage: string;
  additionalStyle?: string;
}
const SectionAnimeLayouts = ({
  children,
  titlePage,
  additionalStyle,
}: SectionAnimeLayoutProps) => {
  return (
    <section className="flex w-full flex-col items-center">
      <Navbar />
      <div className="flex w-11/12 flex-col items-center py-30 sm:w-10/12">
        <h2
          className={`${additionalStyle} self-start rounded-xl bg-indigo-500 p-3 text-2xl font-semibold text-white shadow-sm sm:mx-16`}
        >
          {titlePage}
        </h2>
        {children}
      </div>
      <Footer />
    </section>
  );
};

export default SectionAnimeLayouts;
