import { MagnifyingGlass, TextAlignRight, X } from "@phosphor-icons/react";
import {
  Dispatch,
  KeyboardEventHandler,
  SetStateAction,
  useState,
} from "react";
import { useNavigate } from "react-router";

interface FeaturesNavbarProps {
  isActiveBtn: boolean;
  setIsActiveBtn: Dispatch<SetStateAction<boolean>>;
}

const FeaturesNavbar = (props: FeaturesNavbarProps) => {
  const { isActiveBtn, setIsActiveBtn } = props;
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleValueSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key == "Enter" && valueSearch.trim() != "") {
      navigate(`/result/${valueSearch}`);
    }
  };

  const handleIsActiveBtn = () => {
    setIsActiveBtn(!isActiveBtn);
  };

  const handleShowInput = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="flex items-center gap-2">
      <div
        className={`${isClicked && "left-1/2 opacity-100"} absolute top-15 -left-full flex w-11/12 -translate-x-1/2 rounded-md bg-slate-700 text-white opacity-0 transition-all duration-500 hover:ring-2 hover:ring-slate-400/50 sm:static sm:w-sm sm:opacity-100`}
      >
        <input
          type="text"
          placeholder="search anime here"
          className="w-full p-2.5 text-sm outline-0"
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
          onKeyDown={(e) => handleValueSearch(e)}
        />
        <span className="absolute top-1/2 right-2 hidden -translate-y-1/2 cursor-pointer text-white sm:block">
          <MagnifyingGlass size={23} />
        </span>
      </div>
      <span
        className="absolute right-12 cursor-pointer text-white sm:hidden"
        onClick={handleShowInput}
      >
        <MagnifyingGlass size={23} />
      </span>
      <span
        className="cursor-pointer text-3xl text-white"
        onClick={handleIsActiveBtn}
      >
        {isActiveBtn ? <X /> : <TextAlignRight />}
      </span>
    </div>
  );
};

export default FeaturesNavbar;
