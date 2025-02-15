import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      px={0}  
      py={12}
      w="100%"  
      bg="gray.50"
    >
      <Box
        textAlign="center"
        maxWidth="2xl"
        w="100%"  
        px={2}  
      >
        <Text fontSize="36px" fontWeight="bold" color="gray.900" mb={8}>
          Welcome to the User Management Dashboard
        </Text>
        <Text fontSize="18px" color="gray.700" mb={8}>
          Manage your users effectively, stay organized, and optimize your workflow.
        </Text>
        <Flex justify="center" gap={6}>
          <Link to="/users">
            <Button
              bg="blue.600"
              color="white"
              px={6}
              py={3}
              fontSize="14px"
              fontWeight="bold"
              _hover={{ bg: "blue.400" }}
            >
             Explore Users List ➜
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Dashboard;
