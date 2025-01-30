import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { addUser, editUser, getUsers } from '../api';

const UserModal = ({ user, isOpen, onClose, onUserUpdate }) => {
  const [userData, setUserData] = useState(user || {});
  const toast = useToast();

  const departments = [
    'Sales', 'IT', 'Serial No.', 'Finance', 'Customer Support',
    'Legal', 'Administration', 'R&D', 'Logistics', 'Production',
    'Design', 'Quality Assurance', 'Engineering', 'HR', 'None'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = async () => {
    if (userData.id) {
      await editUser(userData.id, userData);
    } else {
      await addUser(userData);
    }
  
    const updatedUsers = await getUsers();
    onUserUpdate(updatedUsers);
  
    toast({
        title: userData.id ? 'User updated.' : 'User added.',
        description: userData.id ? 'The user has been successfully updated.' : 'The user has been successfully added.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right', 
      });
      
  
    onClose();
  };
  
  

  useEffect(() => {
    setUserData(user || {});
  }, [user]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{user ? 'Edit User' : 'Add User'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              name="firstName"
              value={userData.firstName || ''}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Last Name</FormLabel>
            <Input
              name="lastName"
              value={userData.lastName || ''}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={userData.email || ''}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Department</FormLabel>
            <Select
              name="department"
              value={userData.department || 'None'}
              onChange={handleChange}
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSave} ml={3}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

UserModal.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onUserUpdate: PropTypes.func.isRequired,
};

export default UserModal;
