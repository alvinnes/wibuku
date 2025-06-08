import { Fragment } from "react";
import NavigationItem from "./NavigationItems";
import {
  Bookmark,
  Clock,
  Heart,
  House,
  Queue,
  Tag,
} from "@phosphor-icons/react";

const NavigationGroup = () => {
  return (
    <Fragment>
      <NavigationItem text="Home" link="/" icon={<House size={25} />} />
      <NavigationItem
        text="Popular Anime"
        link="/popular"
        icon={<Heart size={25} />}
      />
      <NavigationItem
        text="List Anime"
        link="/listAnime"
        icon={<Queue size={25} />}
      />
      <NavigationItem
        text="Ongoing Anime"
        link="/allOngoing"
        icon={<Clock size={25} />}
      />
      <NavigationItem
        text="Bookmark"
        link="/bookmark"
        icon={<Bookmark size={25} />}
      />
      <NavigationItem text="Genres" link="/genres" icon={<Tag size={25} />} />
    </Fragment>
  );
};

export default NavigationGroup;
