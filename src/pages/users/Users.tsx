import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";

import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} />;
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 120,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 120,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    editable: true,
    type: "string",
  },
  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 110,
  //   editable: true,
  // },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },

  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const Users = () => {
  const [open, setOPen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOPen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOPen} />}
    </div>
  );
};

export default Users;
