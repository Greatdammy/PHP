import { Row, Col } from "react-bootstrap";
import IMAGES from "../assets/img/images";

const Nav = ({name}) => {
    return (
    <Row className="size col-sm-12">
        <Col lg={10} md={10} sm={10}>
        <p className="ps-5">{name}</p>
        </Col>
        <Col >
        <img src={IMAGES.menu_icon} alt='menu-icon' width={30} height={30}/>
        </Col>
    </Row>

    );
};

export default Nav;