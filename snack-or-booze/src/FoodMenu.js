import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ items}) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          {items.length===0 && <CardTitle className="font-weight-bold text-center">
            
           
          </CardTitle>
          }
          {/* {drinks.length!==0 && <CardTitle className="font-weight-bold text-center">
            
            Drinks Menu
          </CardTitle>
          } */}
          
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            { items.map(item => (
              <Link to={`/snacks/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
         
            ))
            }

           
          </ListGroup>
        
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
