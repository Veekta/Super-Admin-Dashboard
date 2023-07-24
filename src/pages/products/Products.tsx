import { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

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
    field: "title",
    headerName: "Title",
    width: 200,
    editable: true,
    type: "string",
  },
  {
    field: "color",
    headerName: "Color",
    width: 120,
    editable: true,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
    type: "String",
    width: 100,
    editable: true,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 120,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    editable: true,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    editable: true,
    type: "boolean",
  },
  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 110,
  //   editable: true,
  // },

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

const Products = () => {
  const [open, setOPen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOPen(true)}>Add New Product</button>
      </div>
      <div className="tableHold">
        <DataTable slug="products" columns={columns} rows={products} />
        {open && <Add slug="product" columns={columns} setOpen={setOPen} />}
      </div>
    </div>
  );
};

export default Products;
