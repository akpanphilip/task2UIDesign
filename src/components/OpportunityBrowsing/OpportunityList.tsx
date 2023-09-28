type Props = {
  status: string;
  count: number;
};

const OpportunityList = (props: Props) => {
  return (
   
      <div className="opportunity-list">
        <span className="opportunity-status">{props.status}</span>
        <span className="opportunity-count">{props.count}</span>
      </div>

  );
};

export default OpportunityList;
