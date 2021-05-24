import React from 'react';
import '../index.css';
import GoogleLogin from "react-google-login";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import login_img from '../Assets/login_img.jpeg';
import logo from '../Assets/Logo.svg';


export const UnauthenticatedApp = ({handleLogin} : any) => {
  return (
    <>
        <Container fluid>
            <Row className="large-container">
                <Container className = "small-container login_card">
                    <Row>
                        <Col className = "pl-0">
                            <Row className ="align-inner-content login-left-card">
                                <Col className = "login-text col-md-12">
                                    <img className = "login-title" src={logo} alt="Logo" />
                                    <div className = "login-sessionize">Sessionize</div>
                                    <div className = "login-subtitle">Making pair programming frictionless</div>

                                </Col>
                                <Col className = "col-md-12">
                                    <div className = "google-btn">
                                        <GoogleLogin
                                            clientId="614607322794-3d224njddvnkmimjf8hpudt3e1eou3tg.apps.googleusercontent.com"
                                            buttonText="Login with Google"
                                            onSuccess={handleLogin}
                                            onFailure={handleLogin}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className = "pr-0">
                            <div className = "align-inner-content">
                                <img className = "login-img img-responsive" src={login_img} alt="Login" />
                            </div>
                        </Col>

                    </Row>

                </Container>

            </Row>
        </Container>
    </>
  )
}
