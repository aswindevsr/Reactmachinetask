import "./table.css"
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";
// import { ProductService } from './service/ProductService';

const Table = () => {
    const [products, setProducts] = useState([]);

    const columns = [
        {field: 'id', header: 'ID'},
        {field: 'name', header: 'Name'},
        {field: 'quantity', header: 'Quantity'},
        {field: 'price', header: 'Price'}
    ];

    useEffect(() => {
        axios.get("http://localhost:3001/api/table").then((res) => setProducts(res.data))
        console.log("pie charttttt", products);

    }, []);

    return (
        <div className="card">
            <DataTable 
            
            value={products} 
             showGridlines stripedRows 
            // tableStyle={{ backgroundColor:"red",height:"2rem"}} 
            // size="medium"
            className="table"
            // resizableColumns 
                        // columnResizeMode="fit"
                        // paginator
            
            >
                {columns.map((item) => (
                    <Column 
                    className="column"
                     key={item.field} field={item.field} header={item.header} style={{textAlign:"center"}}></Column>
                ))}
            </DataTable>
        </div>
    );
}

export default Table
