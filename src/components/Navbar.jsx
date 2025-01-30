import { Box, Flex, Text, Image } from "@chakra-ui/react";
import ajackusLogo from '../assets/ajackus.jpg';

const Navbar = () => {
  return (
    <Box bg="#235fe7" px={4} py={2} color="white">
      <Flex align="center" justify="center">
        <Box flex="0 0 auto">
          <Image 
            src={ajackusLogo} 
            alt="Ajackus Logo" 
            height="55px" 
            width="150px" 
            borderRadius="8px"
          />
        </Box>
        
        <Text 
          fontSize="32px"
          fontWeight="bold" 
          textAlign="center" 
          flex="1"
        >
          User Management Dashboard 
        </Text>
      </Flex>
    </Box>
  );
};

export default Navbar;
