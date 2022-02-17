import { MdSearch } from "react-icons/md";

import { SearchInputProps } from "./types";

import "./styles.scss";

export const SearchInput = ({ ...props }: SearchInputProps) => {
  return (
    <div className="search-control">
      <input type="search" className="input-search-control" {...props} />
      <button type="button" className="btn-search">
        <MdSearch />
      </button>
    </div>
  );
};
