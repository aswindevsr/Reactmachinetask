

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

// Sample data for the table
const tableData = [
  { id: 1, name: 'John', quantity: 10, price: 20 },
  { id: 2, name: 'David', quantity: 15, price: 25 },
  { id: 3, name: 'Manu', quantity: 8, price: 15 },
  { id: 4, name: 'Mithun', quantity: 12, price: 30 },
  { id: 5, name: 'Sanju', quantity: 18, price: 22 },
];

app.get('/api/table', (req, res) => {
  res.json(tableData);
});

// Sample data for the pie chart
const pieChartData = [
  { label: 'Category A', value: 30 , fill: '#67c587' },
  { label: 'Category B', value: 20 , fill: "#88d1a1" },
  { label: 'Category C', value: 15 , fill: "#a9deba" },
  { label: 'Category D', value: 25 , fill: "#c9ead4" },
  { label: 'Category E', value: 10 , fill: "#eaf6ed" },
];

app.get('/api/pie-chart', (req, res) => {
  res.json(pieChartData);
});

// Sample data for the graph
const graphData = [
  { x: 'Jan', y: 10 ,num: 10 },
  { x: 'Feb', y: 15 ,num: 15 },
  { x: 'Mar', y: 8  ,num: 8},
  { x: 'Apr', y: 12 ,num:  12},
  { x: 'May', y: 18 ,num: 18 },
  { x: 'Jun', y: 18 ,num:  0},
  { x: 'Jul', y: 18 ,num:  0},
  { x: 'Aug', y: 18 ,num:  0},
  { x: 'Sep', y: 18 ,num:  0},
  { x: 'Oct', y: 18 ,num:  0},
  { x: 'Nov', y: 18 ,num:  0},
  { x: 'Dec', y: 18 ,num:  0},
];

app.get('/api/graph', (req, res) => {
  res.json(graphData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});