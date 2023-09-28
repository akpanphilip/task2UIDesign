

import { Row } from "antd";
import WrapIcon from "../UI/WrapIcon";
import OpportunityList from "./OpportunityList";
import { useState } from "react";


const opportunityBrowings = [
  {
    id: 1,
    status: "Applied",
    count: 1745,
  },
  {
    id: 2,
    status: "Shortlisted",
    count: 453,
  },
  {
    id: 3,
    status: "Technical Interview",
    count: 123,
  },
  {
    id: 4,
    status: "Opportunity Browsing",
    count: 243,
  },
  {
    id: 5,
    status: "Video Interview I",
    count: 25,
  },
  {
    id: 6,
    status: "Video Interview II",
    count: 25,
  },
  {
    id: 7,
    status: "Video Interview III",
    count: 25,
  },
  {
    id: 8,
    status: "Offer",
    count: 25,
  },
  {
    id: 9,
    status: "Withdrawn",
    count: 25,
  },
];

const ListOpportunites = opportunityBrowings.map((opportunity) => (
  <OpportunityList status={opportunity.status} count={opportunity.count} />
));

const OpportunityBrowsing = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toogleDropdown = () => {
    if (showDropdown == false) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  return (
    <Row className="between-col">
      {showDropdown && <div className="backdrop"></div>}
      <div className="opportunity-browsing" onClick={toogleDropdown}>
        <span>Opportunity Browsing</span>
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 10L12 14L8 10"
              stroke="#1D4ED8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        {/* opportunity list dropdwon */}
        {showDropdown && (
          <div className="opportunity-lists">{ListOpportunites}</div>
        )}
      </div>

      <div className="wrap-wrap">
        <Row className="wrap-icons">
          <WrapIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9601 5.28003L19.3426 11.6625C20.1001 12.42 20.1001 13.6425 19.3426 14.4L13.7701 19.9725C13.0126 20.73 11.7901 20.73 11.0326 19.9725L4.65008 13.59C4.29008 13.23 4.08008 12.735 4.08008 12.225V6.65253C4.08008 5.58753 4.95008 4.71753 6.01508 4.71753H11.5876C12.1051 4.71753 12.6001 4.92003 12.9601 5.28003Z"
                stroke="#444444"
                stroke-width="0.7"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5801 10.2525C9.15585 10.2525 9.6226 9.7858 9.6226 9.21004C9.6226 8.63428 9.15585 8.16754 8.5801 8.16754C8.00434 8.16754 7.5376 8.63428 7.5376 9.21004C7.5376 9.7858 8.00434 10.2525 8.5801 10.2525Z"
                stroke="#444444"
                stroke-width="0.7"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </WrapIcon>

          <WrapIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M17 14L21 10M17 10L21 14M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z"
                stroke="#A80000"
                stroke-width="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </WrapIcon>

          <WrapIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M21 10L17 14L15 12M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z"
                stroke="#0B0B0B"
                stroke-width="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </WrapIcon>

          <WrapIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M16.8281 5.17163C17.1996 5.54307 17.4942 5.98402 17.6952 6.46932C17.8962 6.95463 17.9998 7.47469 17.9998 7.99997C17.9998 8.52526 17.8963 9.04543 17.6953 9.53073C17.4943 10.016 17.1996 10.457 16.8281 10.8285M19 3C19.6566 3.65661 20.1775 4.43612 20.5328 5.29402C20.8882 6.15192 21.071 7.07134 21.071 7.99993C21.071 8.92851 20.8881 9.84808 20.5327 10.706C20.1774 11.5639 19.6566 12.3435 19 13.0001M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z"
                stroke="#0B0B0B"
                stroke-width="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </WrapIcon>

          <WrapIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L12.2286 12L19.9999 6M21 8.19995V15.8C21 16.9201 21.0002 17.4802 20.7822 17.908C20.5905 18.2844 20.2841 18.5902 19.9078 18.782C19.48 19 18.9203 19 17.8002 19H6.2002C5.08009 19 4.51962 19 4.0918 18.782C3.71547 18.5902 3.40973 18.2844 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.19995C3 7.07985 3 6.51986 3.21799 6.09204C3.40973 5.71572 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.48 5 19.9078 5.21799C20.2841 5.40973 20.5905 5.71572 20.7822 6.09204C21.0002 6.51986 21 7.07985 21 8.19995Z"
                stroke="#0B0B0B"
                stroke-width="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </WrapIcon>
        </Row>

        <Row>
          <div className="move-video">
            <span>Move To Video Interview</span>
            <span className="drop-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_37_2623)">
                  <path
                    d="M11.06 5.72668L8 8.78002L4.94 5.72668L4 6.66668L8 10.6667L12 6.66668L11.06 5.72668Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_37_2623">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </Row>
      </div>
    </Row>
  );
};

export default OpportunityBrowsing;
