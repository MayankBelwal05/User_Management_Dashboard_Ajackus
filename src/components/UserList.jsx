import { useState, useEffect } from 'react';
import { Button, Input, Select, Box, Table, Thead, Tbody, Tr, Th, Td, IconButton, Avatar } from '@chakra-ui/react';
import { FaSearch, FaFilter, FaEdit, FaTrash } from 'react-icons/fa'; 
import UserModal from './UserModal';
import { getUsers, deleteUser } from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => {
    const nameMatch = `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase());
    const emailMatch = user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const departmentMatch = selectedDepartment ? user.department === selectedDepartment : true;
    return (nameMatch || emailMatch) && departmentMatch;
  });

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleFilterChange = (e) => setSelectedDepartment(e.target.value);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));  
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Box width="100%" height="100vh" padding="20px" overflow="auto">
      <Box display="flex" justifyContent="center" mb={4}>
        <Box display="flex" alignItems="center">
          <Input
            placeholder="Search using name or email"
            value={searchQuery}
            onChange={handleSearchChange}
            width="300px"
            mr={4}
          />
          <IconButton icon={<FaSearch />} aria-label="Search" mr={4} />
          <Select
            placeholder="Filter by Department"
            value={selectedDepartment}
            onChange={handleFilterChange}
            width="200px"
          >
            <option value="Sales">Sales</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Legal">Legal</option>
            <option value="Administration">Administration</option>
            <option value="R&D">R&D</option>
            <option value="Logistics">Logistics</option>
            <option value="Production">Production</option>
            <option value="Design">Design</option>
            <option value="Quality Assurance">Quality Assurance</option>
            <option value="Engineering">Engineering</option>
            <option value="HR">HR</option>
            <option value="None">None</option>
          </Select>
          <IconButton icon={<FaFilter />} aria-label="Filter" ml={4} />
        </Box>
        <Button ml= "100px" colorScheme="blue" onClick={() => openModal(null)}>
        ✙ Add User
        </Button>
      </Box>

      <Table variant="striped" color="black" border="1px solid" borderColor="gray.200">
        <Thead backgroundColor="blue.200">
          <Tr >
            <Th color="black" textAlign="center" fontWeight="bold" fontSize="16px">S.No</Th>
            <Th color="black" textAlign="center" fontWeight="bold" fontSize="16px">Avatar</Th>
            <Th color="black" textAlign="center" fontWeight="bold" fontSize="16px">First Name</Th>
            <Th color="black" textAlign="center" fontWeight="bold" fontSize="16px">Last Name</Th>
            <Th color="black" textAlign="center" fontWeight="bold" fontSize="16px">Email</Th>
            <Th color="black" textAlign="center" fontWeight="bold" fontSize="16px">Department</Th>
            <Th color="black" textAlign="center" fontWeight="bold" fontSize="16px">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentUsers.map((user, index) => (
            <Tr key={user.id} height="40px" borderBottom="1px solid" borderColor="gray.200">
              <Td height="10px" textAlign="center">{indexOfFirstUser + index + 1}</Td>
              <Td textAlign="center">
                <Avatar name={`${user.firstName} ${user.lastName}`} size="sm" />
              </Td>
              <Td textAlign="center">{user.firstName}</Td>
              <Td textAlign="center">{user.lastName}</Td>
              <Td textAlign="center">{user.email}</Td>
              <Td textAlign="center">{user.department}</Td>
              <Td textAlign="center">
                <IconButton
                  colorScheme="blue"
                  aria-label="Edit"
                  icon={<FaEdit />}
                  onClick={() => openModal(user)}
                />
                <IconButton
                  colorScheme="red"
                  aria-label="Delete"
                  icon={<FaTrash />}
                  onClick={() => handleDeleteUser(user.id)}
                  ml={4}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Pagination Controls */}
      <Box display="flex" justifyContent="center" mt={4}>
        <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} mr={2}>
          Previous
        </Button>
        {[...Array(totalPages).keys()].map((page) => (
          <Button
            key={page + 1}
            onClick={() => handlePageChange(page + 1)}
            colorScheme={currentPage === page + 1 ? "blue" : "gray"}
            mx={1}
          >
            {page + 1}
          </Button>
        ))}
        <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} ml={2}>
          Next
        </Button>
      </Box>

      <UserModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={closeModal}
        onUserUpdate={(updatedUserList) => setUsers(updatedUserList)}
      />
    </Box>
  );
};

export default UserList;
