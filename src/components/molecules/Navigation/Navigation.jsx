import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const Navigation = () => {
  let isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/goit-react-hw-08-phonebook/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {isLoggedIn && (
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/goit-react-hw-08-phonebook/contacts">
            Contacts
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};
