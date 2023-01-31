import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";
import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
 
} from 'reactstrap';

function CustomNavber(args) {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [login, setLogin]= useState(false)
  const [user , setUser] = useState(undefined)

    useEffect(()=>{

      setLogin(isLoggedIn())
      setUser(getCurrentUserDetail())

    },[login])

    const logout=()=>{
      doLogout(()=>{
        setLogin(false);
        navigate("/")
      })
    }

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar 
      color='primary' 
      dark 
      expand="md"
      className='px-5'
       fixed='' {...args}>

        <NavbarBrand tag={ReactLink} to="/">
          MyBlogs</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink}  to="/">New Feed</NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink tag={ReactLink}  to="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink}  to="/service">Services</NavLink>
            </NavItem>
           
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                more
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Contact Us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Youtube</DropdownItem>
                <DropdownItem>Instagram</DropdownItem>
                <DropdownItem>LinkedIn</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav navbar>
                {

                    login && (
                      <>
                      <NavItem>
                      <NavLink tag={ReactLink} to="/user/profile-info">
                        Profile
                      </NavLink>
                    </NavItem>
                      <NavItem>
                      <NavLink tag={ReactLink} to="/user/dashboard">
                        {user.name}
                      </NavLink>
                    </NavItem>
                  
                       <NavItem>
                      <NavLink onClick={logout}>
                        Logout
                      </NavLink>
                    </NavItem>
 
                      </>
                     
                    )

                }

                {
                  !login && (
                    <>
                      <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/Signup">
                Signup
              </NavLink>
            </NavItem>
        
                    </>
                  )
                }
        
        </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavber;