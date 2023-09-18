/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar, //
  Container,
  Nav,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='d-flex justify-content-between'>
        <Link passHref href="/">
          <Navbar.Brand>Rare Pro</Navbar.Brand>
        </Link>

          <Button variant="danger" onClick={signOut}>
            <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
          </Button>
      </Container>
    </Navbar>
  );
}
