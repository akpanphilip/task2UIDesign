/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import FilterDropdown from "./FilterDropdown";

type Props = {};
const filterDescs = [
  {
    id: 1,
    desc: "Personal Information",
  },
  {
    id: 2,
    desc: "Education",
  },
  {
    id: 3,
    desc: "Work Experience",
  },
  {
    id: 4,
    desc: "Activity Filter",
  },
  {
    id: 5,
    desc: "Advanced Filter",
  },
];

const listFilterDesc = filterDescs.map((filterDesc) => (
  <FilterDropdown desc={filterDesc.desc} />
));

const Filters = (props: Props) => {
  return (
    <div className="filters">
      <div className="filter-title-row">
        <span>Filters</span>
        <span>0 Selected</span>
      </div>

      {listFilterDesc}
    </div>
  );
};

export default Filters;
