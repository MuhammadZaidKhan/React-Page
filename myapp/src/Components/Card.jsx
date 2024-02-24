import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <div className="d-flex flex-wrap justify-content-around">
<Card className='card'>
  <Card.Img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="Word Image" className='image' />
  <Card.Body>
    <Card.Title className="bold-text">PDF TO WORD</Card.Title>
    <Card.Text>
      Easily Convert PDF to Word document
    </Card.Text>
  </Card.Body>
</Card>
<Card className='card'>
  <Card.Img src="https://images.hipdf.com/images2022/icons/PPT-PDF.svg" alt="Word Image" className='image' />
  <Card.Body>
    <Card.Title className="bold-text">PPT TO PDF</Card.Title>
    <Card.Text>
      Convert Powerpoint to PDF Online
    </Card.Text>
  </Card.Body>
</Card>
<Card className='card'>
  <Card.Img src="https://images.hipdf.com/images2022/icons/Excel-PDF.svg" alt="Word Image" className='image' />
  <Card.Body>
    <Card.Title className="bold-text">PDF TO Excel</Card.Title>
    <Card.Text>
      Easily Convert PDF to Excel
    </Card.Text>
  </Card.Body>
</Card>
<Card className='card'>
  <Card.Img src="https://images.hipdf.com/images2022/icons/jpg-pdf.svg" alt="Word Image" className='image' />
  <Card.Body>
    <Card.Title className="bold-text">PDF TO JPG</Card.Title>
    <Card.Text>
      Easily Convert JPG,PNG to PDF
    </Card.Text>
  </Card.Body>
</Card>
  </div>
  );
}

export default BasicExample;
