import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface SampleData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: {
    url: string;
    text: string;
  };
}

const UserTable: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<SampleData>(
          "https://reqres.in/api/users"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (userId: number) => {
    // navigate(`/details/${userId}`);
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">User Management</Typography>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Avatar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.first_name}</TableCell>
                  <TableCell>{user.last_name}</TableCell>
                  <TableCell>
                    <img
                      src={user.avatar}
                      alt={`Avatar of ${user.first_name}`}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        // rowsPerPageOptions={[5, 12,]}
        // component="div"
        // count={data.length}
        // rowsPerPage={rowsPerPage}
        // page={page}
        // onChangePage={}
        // onChangeRowsPerPage={}
      /> */}
    </div>
  );
};

export default UserTable;
