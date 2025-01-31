import { Box, VStack, Text, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerContent, DrawerOverlay, CloseButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        display={{ base: "block", md: "none" }}
        icon={<Text fontSize="24px">☰</Text>}
        onClick={onOpen}
        aria-label="Open Sidebar"
        variant="outline"
        colorScheme="teal"
        m={4}
      />

    {/* /desktop */}
      <Box w={{ base: "50%", md: "250px" }} h="100vh" bg="#235fe7" color="white" p={5} display={{ base: "none", md: "block" }}>
        <VStack align="start" spacing={6}>
          <Link to="/"><Text fontSize="18px" _hover={{ bg: "blue.600", p: 2 }}>📊 Dashboard</Text></Link>
          <Link to="/users"><Text fontSize="18px" _hover={{ bg: "blue.600", p: 2 }}>👨‍💼 User List</Text></Link>
          <Link to="/settings"><Text fontSize="18px" _hover={{ bg: "blue.600", p: 2 }}>⚙️Settings</Text></Link>
          <Link to="/other"><Text fontSize="18px" _hover={{ bg: "blue.600", p: 2 }}>📄Other Page</Text></Link>
        </VStack>
      </Box>

     {/* mobile */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size={{ base: "sm", md: "full" }} >
        <DrawerOverlay>
          <DrawerContent bg="#235fe7">
            <DrawerHeader display="flex" justifyContent="space-between">
              <Text color="white" fontSize="22px">☰</Text>
              <CloseButton size={20} color="white" onClick={onClose} />
            </DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={6}>
                <Link to="/"><Text fontSize="22px" color="white" _hover={{ bg: "blue.600", p: 2 }}>📊 Dashboard</Text></Link>
                <Link to="/users"><Text fontSize="22px" color="white" _hover={{ bg: "blue.600", p: 2 }}>👨‍💼 User List</Text></Link>
                <Link to="/settings"><Text fontSize="22px" color="white" _hover={{ bg: "blue.600", p: 2 }}>⚙️Settings</Text></Link>
                <Link to="/other"><Text fontSize="22px" color="white" _hover={{ bg: "blue.600", p: 2 }}>📄Other Page</Text></Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Sidebar;
