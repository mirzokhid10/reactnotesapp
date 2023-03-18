import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({handleSearchNote}) => {
    return <div className="flex gap-2 items-center bg-[rgb(233,233,233)] rounded-xl 
    p-2 mb-6">
        <MdSearch className="" size="1.3rem"/>
        <input onChange={(event) => handleSearchNote(event.target.value)} className="w-full border-none bg-[rgb(233,233,233)] focus:outline-none" type="text" placeholder="type to seatch..." /> 
    </div>
}

export default Search