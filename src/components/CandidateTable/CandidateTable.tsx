import { Checkbox } from "antd";
import TableInfo from "../TableInfo/TableInfo";
const candidates = [
  {
    id: 1,
    name: "Aaliyah Sanderson",
    address: "Riyadh, Saudi Arabia",
    education_1: "Bachelor - Cambridge University (2023 - 2023)",
    locations: {
      location_1: "New york",
      location_2: "Marketing",
      location_3: "London",
    },
    video_count: "",
    program_count: "",
  },
  {
    id: 2,
    name: "John Doe",
    address: "Bostom, USA",
    education_1: "Bachelor - MIT (2023 - 2023)",
    locations: {
      location_1: "New york",
      location_2: "Marketing",
      location_3: "London",
    },
    video_count: "",
    program_count: "",
  },
  {
    id: 3,
    name: "Thomas Matt",
    address: "Edinburgh, UK",
    education_1: "Bachelor - Harvard University (2023 - 2023)",
    locations: {
      location_1: "New york",
      location_2: "Marketing",
      location_3: "London",
    },
    video_count: "",
    program_count: "",
  },
  {
    id: 4,
    name: "Kamilia Smith",
    address: "London, UK",
    education_1: "Bachelor - Boston University (2023 - 2023)",
    locations: {
      location_1: "New york",
      location_2: "Marketing",
      location_3: "London",
    },
    video_count: "",
    program_count: "",
  },
  {
    id: 5,
    name: "Roy Jade",
    address: "Cambridge,  UK",
    education_1: "Bachelor - Yale (2023 - 2023)",
    locations: {
      location_1: "New york",
      location_2: "Marketing",
      location_3: "London",
    },
    video_count: "",
    program_count: "",
  },
  {
    id: 6,
    name: "Ahmed Salman",
    address: "New York, USA",
    education_1: "Bachelor - Cambridge University (2023 - 2023)",
    education_2:
      "Marketing and Business Development Intern - Disney (2023 - 2023)",
    locations: {
      location_1: "New york",
      location_2: "Marketing",
      location_3: "London",
    },
    video_count: "4",
    program_count: "5",
  },
];

const listCandidates = candidates.map((candidate) => (
  <TableInfo
    name={candidate.name}
    address={candidate.address}
    education_1={candidate.education_1}
    education_2={candidate.education_2}
    video_count={candidate.video_count}
    program_count={candidate.program_count}
    location_1={candidate.locations.location_1}
    location_2={candidate.locations.location_2}
    location_3={candidate.locations.location_3}
  />
));

const CandidateTable = () => {
  return (
    <div className="candidates-table">
      {/* table heading */}
      <div className="candidate-table-heading">
        <div>
          <Checkbox></Checkbox>
          <span className="candidate-count">247 Candidates</span>
        </div>
        <div className="candidate-tabs">
          <span className="candidate-tab">
            <a href="" className="active">
              Qualified
            </a>
          </span>
          <span className="candidate-tab">
            <a href="">
              Task <span className="tab-count">25</span>
            </a>
          </span>
          <span className="candidate-tab">
            <a href="">
              Disqualified <span className="tab-count">78</span>
            </a>
          </span>
        </div>
      </div>

      {/* table info */}
      {listCandidates}
    </div>
  );
};

export default CandidateTable;
