import { Row, Col } from "react-bootstrap";
import IMAGES from "../assets/img/images";

const Nav = ({name}) => {
    return (
    <Row className="size">
        <Col className="col-lg-10 col-md-10 col-sm-10">
        <p className="ps-5">{name}</p>
        </Col>
        <Col  className="icon col-sm-2">
        <img src={IMAGES.menu_icon} alt='menu-icon' width={30} height={30}/>
        </Col>
    </Row>

    );
};

export default Nav;