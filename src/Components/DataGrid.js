import React, {useEffect, useState} from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from 'axios';
import { Avatar, Paper } from "@mui/material";

const baseUrl = "https://p9i3ym1dk0.execute-api.us-west-2.amazonaws.com/v0/merlin/query/pub/prueba"



function Camelot()
{
    //const styles = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post(baseUrl)
        .then((res) => {
            setData(res.data.result)
        })
    }, []);
    
   
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "nombre", headerName: "Curso", width: 180 },
        { field: "precio", headerName: "Precio", width: 180 },
        { field: "registro", headerName: "Registro", width: 180 },
        { field: "eNombre", headerName: "Estatus", width: 180 },
        { field: "eId", headerName: "Estatus ID", width: 90 },
        { field: "categNombre", headerName: "Categoría", width: 180 },
        { field: "urlImage", headerName: "Imagen", width: 100, renderCell: (params) => (params.row.cur_url_imagen !== null) ? <Avatar src={ params.row.cur_url_imagen }/>: + ".png", sortable:false, filterable:false },
        { field: "acciones", headerName: "Acciones", width: 150, type: 'actions' },
    ];

    const rows = data.map((row) => ({
        
        id: row.cur_id,
        nombre: row.cur_nombre,
        precio: row.cur_precio,
        registro: row.cur_fh_reg,
        eNombre: row.estatus_nombre,
        eId: row.estatus_id,
        categNombre: row.categ_nombre,
        urlImage: row.cur_url_imagen,
        
    }));

    const dataGridStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 4,
        borderRadious: 2,
        height: 500
    };

    console.log(data);
    return <div style={{ height: 500, width: "100%"}}>
        <Paper sx={dataGridStyle}>
        <DataGrid 
            rows = {rows}
            columns = {columns}
            components = {{Toolbar: GridToolbar}}
            pageSize={10}
            rowsPerPageOptions={[10]}
        />
        </Paper>
    </div>;
}

export default Camelot;