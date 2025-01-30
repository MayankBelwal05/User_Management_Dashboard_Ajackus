import { Box, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box w={{ base: "100%", md: "300px" }} h="100vh" bg="#235fe7" color="white" p={5}>
      <VStack align="start" spacing={6}>
        <Link to="/"><Text fontSize="20px" _hover={{ bg: "blue.600", p: 2 }}>📊 Dashboard</Text></Link>
        <Link to="/users"><Text fontSize="20px" _hover={{ bg: "blue.600", p: 2 }}>👨‍💼 User List</Text></Link>
        <Link to="/settings"><Text fontSize="20px" _hover={{ bg: "blue.600", p: 2 }}>⚙️Settings</Text></Link>
        <Link to="/other"><Text fontSize="20px" _hover={{ bg: "blue.600", p: 2 }}>📄Other Page</Text></Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
