import { SealWarning } from "@phosphor-icons/react";
import { DataAnime } from "../../interfaces/IDataAnime";

interface ModalConfirmDelete {
  isClickedBtn: boolean;
  setIsClickedBtn: React.Dispatch<React.SetStateAction<boolean>>;
  setDataAnimeBookmarks: React.Dispatch<React.SetStateAction<DataAnime[]>>;
}

const ModalConfirmDelete = (props: ModalConfirmDelete) => {
  const { isClickedBtn, setIsClickedBtn, setDataAnimeBookmarks } = props;
  const handleDeleteAnimes = () => {
    localStorage.removeItem("bookmarked");
    setDataAnimeBookmarks([]);
    setIsClickedBtn(false);
  };
  return (
    <div
      className={`${isClickedBtn ? "visible opacity-100" : "invisible opacity-0"} fixed top-0 left-0 z-999 flex h-screen w-full items-center justify-center bg-slate-700/40 backdrop-blur-sm transition-all duration-500 ease-in-out`}
    >
      <div className="flex h-60 w-55 flex-col items-center justify-between rounded-md bg-white p-4">
        <SealWarning size={70} className="text-red-500" />
        <p className="text-center">
          Are you sure want to delete all bookmarks?
        </p>
        <div className="flex gap-8">
          <button
            onClick={handleDeleteAnimes}
            className="cursor-pointer rounded-sm bg-red-500 px-4 py-1.5 font-semibold text-white shadow-sm"
          >
            Yes
          </button>
          <button
            onClick={() => setIsClickedBtn(false)}
            className="cursor-pointer rounded-sm bg-slate-700 px-4 py-1.5 font-semibold text-white shadow-sm"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmDelete;
