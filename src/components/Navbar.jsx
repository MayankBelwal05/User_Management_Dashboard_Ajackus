import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import ajackusLogo from '../assets/ajackus.jpg';

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="#235fe7" px={4} py={2} color="white">
      <Flex 
        align="center" 
        justify={isMobile ? "space-between" : "center"} 
        direction={isMobile ? "row" : "row"} 
        wrap="wrap"
      >
        <Box flex="0 0 auto" display="flex" justifyContent={isMobile ? "center" : "flex-start"}>
          <Image 
            src={ajackusLogo} 
            alt="Ajackus Logo" 
            height="55px" 
            width="150px" 
            borderRadius="8px"
          />
        </Box>
        
        <Text 
          fontSize={isMobile ? "20px" : "32px"}  
          fontWeight="bold" 
          textAlign={isMobile ? "center" : "center"} 
          flex="1"
          mt={isMobile ? 2 : 0} 
        >
           User Management Dashboard ╰┈➤
        </Text>
      </Flex>
    </Box>
  );
};

export default Navbar;
