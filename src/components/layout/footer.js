import React from "react"
import { Navbar, Nav, FormControl, Form, Col, Row } from 'react-bootstrap';
import styled, {css} from 'styled-components'; 
import 'font-awesome/css/font-awesome.min.css';

const BaseStyled = css`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 140.62%;
`
const Base = styled(Row)`
  ${BaseStyled}
  background: #000000;
  font-size: 14px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
`
const Title = styled.p`
  ${BaseStyled}
  font-size: 22px;
  color: #FFFFFF;
`
const Logo = styled.p`
  ${BaseStyled}
  font-size: 32px;
  color: #437729;
`
class Footer extends React.Component{
  render(){
    return(
      <>
        <Base>
          <Col md={3}>
            <Logo>Charity</Logo>
            <p>Grantors have items which they do not use and they would like to donate but do not have time. 
              Also they do not know who is in need and who will deliver those items. 
              In another aspect grantees need items to improve their lives but they do not know where to find help.
            </p>
          </Col>
          <Col md={3}>
            <Title>Usefull Links</Title>
            <p>Hoạt Động</p>
            <p>Từ Thiện</p>
            <p>Hoàn Cảnh Khó Khăn</p>
            <p>Tin Tức</p>
          </Col>
          <Col md={3}>
            <Title>Latest News</Title>
            <p>Charity & voluntary sector news</p>
            <p>Charity news headlines</p>
            <p>Charity today awards</p>
              <p>Charity news headlines</p>
          </Col>
          <Col md={3}>
            <Title>Contact</Title>
            <p><i class="fa fa-phone fa-2x"></i>&nbsp;&nbsp;(+84) 8585 636 343</p>
            <p><i class="fa fa-envelope-o fa-2x"></i>&nbsp;&nbsp;charity@gmail.com</p>
            <p><i class="fa fa-map-marker fa-2x"></i>&nbsp;&nbsp;101b Lê Hữu Trác, An Hải Đông, Sơn Trà, Đà Nẵng</p>
          </Col>
        </Base>
      </>
    )
  }
}
export default Footer;