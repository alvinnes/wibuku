import { Link } from "react-router";
import { EpisodeAnime } from "../../pages/DetailAnimePage";
import { SealWarning } from "@phosphor-icons/react";

interface EpisodesAnimeProps {
  episodeAnim: EpisodeAnime[];
}

const EpisodesAnime = (props: EpisodesAnimeProps) => {
  const { episodeAnim } = props;
  return (
    <div className="flex w-11/12 flex-col items-center sm:w-10/12">
      <h2 className="mb-1 self-start text-lg font-bold">Episodes</h2>
      {episodeAnim.length < 1 && (
        <p className="flex flex-col items-center gap-4">
          <SealWarning size={30} weight="bold" /> Episodes still process
        </p>
      )}
      {episodeAnim.length > 1 && (
        <ul className="scrollbar h-83 w-full overflow-y-scroll pt-4 sm:-ml-6">
          {episodeAnim?.map((eps) => (
            <li
              key={eps.mal_id}
              className="mx-auto mb-3 cursor-pointer rounded-md bg-slate-800 p-3 text-sm shadow-md transition-all duration-300 hover:ring-2 hover:ring-slate-600 sm:w-[95%]"
            >
              <Link to={`/`}>Episode {eps.mal_id}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EpisodesAnime;
