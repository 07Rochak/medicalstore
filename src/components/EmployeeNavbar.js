import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import EmployeePageHeader from './EmployeePageHeader'

const EmployeeNavbar = () => {
  return (
    <div>
      <EmployeePageHeader />
      <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Link to='/Create' style={{ textDecoration: 'none ' }}><Navbar.Brand>Create</Navbar.Brand></Link>
              <Link to='/Delete' style={{ textDecoration: 'none ' }}><Navbar.Brand>Delete</Navbar.Brand></Link>
              <Link to='/Update' style={{ textDecoration: 'none ' }}><Navbar.Brand>Update</Navbar.Brand></Link>
              <Link to='/Complaints' style={{ textDecoration: 'none ' }}><Navbar.Brand>Complaints</Navbar.Brand></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default EmployeeNavbar
