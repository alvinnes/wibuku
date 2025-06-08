import { Link } from "react-router";
import { DetailAnime } from "../../interfaces/IDetailAnime";
import { ReactNode, useState } from "react";
import DescriptionAllAnime from "./DescriptionAllAnime";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

export interface DescriptionAnimeProps {
  detailAnim: DetailAnime | null;
  icon?: ReactNode;
  text?: string;
  value?: string | number;
}

const DescriptionAnime = (props: DescriptionAnimeProps) => {
  const { detailAnim } = props;
  const [isDetailDescription, setIsDetailDescription] = useState(false);
  return (
    <div className="flex w-11/12 flex-col sm:w-10/12">
      <h2 className="my-4 text-lg font-bold sm:my-0">Synopsis</h2>
      <div className={``}>
        <p
          className={`${isDetailDescription ? "max-h-[800px] bg-transparent" : "max-h-20 before:bg-linear-to-t before:from-slate-900 before:to-transparent sm:before:from-slate-800"} relative mt-2 mb-3 overflow-hidden text-sm text-slate-200 transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:h-10 before:w-full`}
        >
          {detailAnim?.synopsis}
        </p>
        <p
          onClick={() => setIsDetailDescription(!isDetailDescription)}
          className="-mt-2 cursor-pointer text-sm font-semibold text-slate-200"
        >
          {isDetailDescription ? (
            <CaretUp size={25} className="mx-auto" weight="bold" />
          ) : (
            <CaretDown size={25} className="mx-auto" weight="bold" />
          )}
        </p>
      </div>
      <div className="my-8">
        <h2 className="mb-6 text-lg font-bold">Description Anime</h2>
        <DescriptionAllAnime detailAnim={detailAnim} />
      </div>
      <div className="my-8">
        <h2 className="mb-6 text-lg font-bold">Studios</h2>
        {detailAnim?.studios.map((studio, id) => (
          <button
            key={id}
            className="mr-3 mb-2.5 rounded-xl bg-slate-800 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-slate-200/20"
          >
            <Link to={`/genres`}>{studio.name}</Link>
          </button>
        ))}
      </div>
      <div className="my-8">
        <h2 className="mb-6 text-lg font-bold">Producers</h2>
        {detailAnim?.producers.map((producer, id) => (
          <button
            key={id}
            className="mr-3 mb-2.5 rounded-xl bg-slate-800 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-slate-200/20"
          >
            <Link to={`/genres`}>{producer.name}</Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DescriptionAnime;
