import Card from "react-bootstrap/Card";

const Mycard = ({ icon, title, description, step }) => {
  return (
    <div className="container text-center">

            <Card>
              <Card.Body>
                <Card.Title>{icon}</Card.Title>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Title>{step}</Card.Title>
              </Card.Body>
            </Card>

    </div>
  );
};
export default Mycard;
