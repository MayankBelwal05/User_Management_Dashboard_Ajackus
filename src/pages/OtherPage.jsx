import { Box, Text, Flex } from "@chakra-ui/react";

const OtherPage = () => {
  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" w="100%">
      <Box textAlign="center" px={4}>
        <Text fontSize="4xl" fontWeight="bold" color="gray.900">This is 📋 Other Dummy page</Text>
      </Box>
    </Flex>
  );
};

export default OtherPage;
