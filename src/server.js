import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'toko_tanaman'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected!');
});

app.get('/api/tanaman/:nama', (req, res) => {
  const nama = req.params.nama;
  const query = 'SELECT harga_satuan AS harga, stok FROM penjualan_tanaman WHERE jenis_tanaman = ?';
  db.query(query, [nama], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
