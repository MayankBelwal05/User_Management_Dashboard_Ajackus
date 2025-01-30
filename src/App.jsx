import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import OtherPage from "./pages/OtherPage";
import { useEffect, useState } from "react";
import { getUsers } from "./api";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []);

  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Flex>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserList users={users} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/other" element={<OtherPage />} />
          </Routes>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
