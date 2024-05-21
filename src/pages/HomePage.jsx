import { Container, Row, Col, Image } from 'react-bootstrap';

import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import home3 from '../images/home3.png';
import home4 from '../images/home4.png';
import home5 from '../images/home5.png';
import home6 from '../images/home6.png';

const HomePage = () => {
  return (
    <div className="split-background">
      <Container fluid className='mt-6 pt-5 px-4 py-5 mb-6'>
        <Row className="justify-content-center align-items-center">
          {/* ini kiri */}
          <Col md lg={{ span: 4, offset: 0 }} className='ml-md-3 mt-3 text-center'>
            <Image src={home1} style={{ width: "70%", height: "auto" }} alt="gambar1" />
            <h2 className='mt-3'>Tanaman Hias</h2> <br />
            <p style={{ textAlign: 'justify' }}>
              Tanaman hias adalah tumbuhan yang ditanam untuk keindahan dan sering ditempatkan di taman, pot, atau dalam ruangan. Mereka dipilih karena warna, bentuk, atau aroma menarik, untuk menciptakan lingkungan yang menyegarkan. Jenisnya bisa beragam, termasuk berbunga, daun, atau unik dalam struktur.
            </p>
          </Col>
          {/* ini kanan */}
          <Col md lg={{ span: 4, offset: 2 }} className='ml-md-3 mt-3 text-center'>
            <Image src={home2} style={{ width: "15%", height: "15%" }} alt="logo" />
            <h2 className='mt-3'>Tanaman Harmoni</h2> <br />
            <div className="image-grid">
              <Row>
                <Col xs={6} className='mb-3'>
                  <Image src={home3} style={{ width: "90%", height: "auto", margin: "5px" }} alt="gambar3" />
                </Col>
                <Col xs={6} className='mb-3'>
                  <Image src={home4} style={{ width: "90%", height: "auto", margin: "5px" }} alt="gambar4" />
                </Col>
              </Row>
              <Row>
                <Col xs={6} className='mb-3'>
                  <Image src={home5} style={{ width: "90%", height: "auto", margin: "5px" }} alt="gambar5" />
                </Col>
                <Col xs={6} className='mb-3'>
                  <Image src={home6} style={{ width: "90%", height: "auto", margin: "5px" }} alt="gambar6" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage;
