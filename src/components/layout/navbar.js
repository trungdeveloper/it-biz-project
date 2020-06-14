import React from "react"
import { Navbar, Nav, FormControl, Form, Col, Row, Container } from 'react-bootstrap';
import styled, {css} from 'styled-components'; 
import 'font-awesome/css/font-awesome.min.css';
import LogoImage from '../../static/images/logo.png'

const BaseStyles = css`
	font-family: Roboto;
	font-style: normal;
  font-weight: bold;
  line-height: 140.62%;
`
const Title = styled(Navbar.Brand)`
  ${BaseStyles}
	font-size: 30px;
  color: #437729;
  display:flex;
  justify-content:center;
`

const FormSearch = styled(FormControl)`
	border-radius:50px; 
	width: 400px !important;
`
const NavLink = styled(Nav)`
  ${BaseStyles}
	margin-left: 20px;
	font-weight: normal;
	font-size: 18px;
	color: #000000;
`

const Logo = styled.div`
	display:block;
`
const Slogan = styled.p`
   ${BaseStyles}
	font-weight: 200;
	font-size: 16px;
	color: #000000;
`
const NavbarCustom = styled(Navbar)`
	height: 95px;
`
const Image = styled.img`
  height:42px;
  width:42px;
`
class NavigateBar extends React.Component{
	render() {
		return (
		  <>
        <NavbarCustom bg="#FFFFFF" variant="#FFFFFF">
          <Logo>
            <Title href="#home">Charity</Title>
            <Slogan>Yêu thương đến từ đôi bàn tay của bạn</Slogan>
          </Logo>
          <Nav className="mr-auto">
            <NavLink href="#home"> HOẠT ĐỘNG</NavLink>
            <NavLink href="#features">TỪ THIỆN</NavLink>
            <NavLink href="#pricing">HOÀN CẢNH KHÓ KHĂN</NavLink>
            <NavLink href="#pricing">NHÀ TÀI TRỢ</NavLink>
          </Nav>
          <Form inline>
            <FormSearch type="text" placeholder="Tìm kiếm" className="mr-sm-2" />
          </Form>
          <i class="fa fa-user-o fa-2x" ></i>
				</NavbarCustom>
		  </>
		);
	}

}
export default NavigateBar;
