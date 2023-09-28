import { Col } from "antd";
import "./WrapIcon.css";

type Props = {
  children?: JSX.Element[] | JSX.Element;
};

const WrapIcon = (props: Props) => {
  return <Col className="wrapIcon">{props.children}</Col>;
};

export default WrapIcon;
