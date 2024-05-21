import { useState } from 'react';

const Produk = () => {
  const [selectedTanaman, setSelectedTanaman] = useState('');
  const [tanamanInfo, setTanamanInfo] = useState({ harga: '', stok: '' });

  const handleChange = (event) => {
    setSelectedTanaman(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3001/api/tanaman/${selectedTanaman}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setTanamanInfo(data);
        } else {
          setTanamanInfo({ harga: 'Data tidak ditemukan', stok: 'Data tidak ditemukan' });
        }
        alert('You selected: ' + selectedTanaman);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  return (
    <div className="page-container">
      <div className="produk-container">
        <h2 className="produk-title ml-md-3 mt-3 text-center">Produk Tanaman Harmoni</h2>
        <div className="search-container" style={{ marginLeft: '50px', marginTop: '50px' }}>
          <h4>Cari Tanaman</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="tanaman">Pilih Jenis Tanaman:</label><br />
            <input list="tanamans" name="tanaman" id="tanaman" onChange={handleChange} value={selectedTanaman} />
            <datalist id="tanamans">
              <option value="Petei" />
              <option value="Melati" />
              <option value="Jambu" />
              <option value="Durian" />
              <option value="Mawar" />
              {/* Tambahkan opsi lainnya sesuai dengan data yang tersedia di database */}
            </datalist>
            <input type="submit" />
          </form>
        </div>
      </div>
      <div className='info-container' style={{ marginLeft: '50px', marginBottom:'70px' }}>
        <h4>Informasi Harga</h4>
        <p>Harga: {tanamanInfo.harga}</p>
        <p>Stok: {tanamanInfo.stok}</p>
      </div>
    </div>
  );
}

export default Produk;
