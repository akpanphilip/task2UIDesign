/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Row, Col, Checkbox } from "antd";
import Layout from "../../components/Layout/Layout";
import InputGroupSearch from "../../components/InputGroupSearcch/InputGroupSearch";
import Filters from "../../components/Filters/Filters";
import CandidateTable from "../../components/CandidateTable/CandidateTable";
import OpportunityBrowsing from "../../components/OpportunityBrowsing/OpportunityBrowsing";

const opportunities = [
  { id: 1, opportunity_status: "Applied", opportunity_count: 1745 },
  { id: 2, opportunity_status: "Shortlisted", opportunity_count: 453 },
  { id: 3, opportunity_status: "Technical Interview", opportunity_count: 123 },
  { id: 4, opportunity_status: "Opportunity Browsing", opportunity_count: 243 },
  { id: 5, opportunity_status: "Video Interview I", opportunity_count: 25 },
  { id: 6, opportunity_status: "Video Interview II", opportunity_count: 25 },
  { id: 7, opportunity_status: "Video Interview III", opportunity_count: 25 },
  { id: 8, opportunity_status: "Offer", opportunity_count: 25 },
  { id: 9, opportunity_status: "Withdrawn", opportunity_count: 25 },
];

const Main = () => {
  return (
    <Layout>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <p className="page-title">London Internship Program</p>
          <span className="page-sub-title">London</span>
        </Col>

        <Col xs={24} sm={24} md={24} lg={16}>
          <OpportunityBrowsing />
        </Col>
      </Row>

      <Row className="base-row" gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <InputGroupSearch />
          <Filters />
        </Col>

        <Col xs={24} sm={24} md={24} lg={16}>
          <CandidateTable />
        </Col>
      </Row>
    </Layout>
  );
};

export default Main;
