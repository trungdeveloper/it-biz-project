import React from "react"
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components'; 
import 'font-awesome/css/font-awesome.min.css';
import Button from 'react-bootstrap/Button';


const Top = styled(Row)`
    height: 52px;
    background: #000000;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140.62%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
`
const DonateButton = styled(Button)`
    background-color: #437729;
`
class TopHead extends React.Component{
    render() {
        return (
           <>
            <Top>
                <Col md={2}>
                    Mail: charity@gmail.com
                </Col>
                <Col md={8}>
                    Phone: (+84) 854.868.434
                </Col>
                <Col md={2}>
                    <DonateButton>
                        TÀI TRỢ NGAY
                    </DonateButton>
                </Col>
            </Top>
           </>
        );
    }

}
export default TopHead;