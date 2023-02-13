import Base from "../component/Base";
import NewFeed from "../component/NewFeed";
import {
  CardBody,
  CardTitle,
  Card,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
const Home = () => {
  return (
    <Base>
      {/* <Card
        color="info"
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card> */}
      <NewFeed/>
    </Base>
  );
};

export default Home;
