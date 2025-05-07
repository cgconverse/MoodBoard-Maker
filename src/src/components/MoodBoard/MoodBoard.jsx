import React from 'react';
import logo from '../../logo.svg';
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function MoodBoard() {
    return (
      <Container className="pt-5">
        <Row className="mb-4">
          <Col xs={6} md={4}>
            <Image src={logo} className="App-logo" alt="logo" thumbnail/>
          </Col>
          <Col xs={6} md={4}>
          <Image src={logo} className="App-logo" alt="logo" thumbnail />
          </Col>
          <Col xs={6} md={4}>
          <Image src={logo} className="App-logo" alt="logo" thumbnail/>
          </Col>
        </Row>

        
  
        <Row className="mb-4">
          <Col class="g-col-6">
          <Image src={logo} className="App-logo" alt="logo" thumbnail/>
          </Col>
          <Col class="g-col-6">
          <Image src={logo} className="App-logo" alt="logo" thumbnail/>
          </Col>
          <Col class="g-col-6">
          <Image src={logo} className="App-logo" alt="logo" thumbnail/>
          </Col>
        </Row>
  
        <Row className="mb-4">
        <Col xs={6} md={4}>
          <Image src={logo} className="App-logo" alt="logo" thumbnail/>
          </Col>
          <Col xs={6} md={4}>
          <Image src={logo} className="App-logo" alt="logo" thumbnail/>
          </Col>
          <Col xs={6} md={4}>
          <Image src={logo} className="App-logo" alt="logo" thumbnail />
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default MoodBoard;










// function MoodBoard() {
//     const [items, setItems] = useState([]);
  
//     const [{ isOver }, dropRef] = useDrop(() => ({
//       accept: 'image',
//       drop: (item) => setItems((prev) => [...prev, item]),
//       collect: (monitor) => ({
//         isOver: monitor.isOver(),
//       }),
//     }));
  
//     return (
//       <div
//         ref={dropRef}
//         className="moodboard"
//         style={{
//           minHeight: '500px',
//           backgroundColor: isOver ? '#e0f7fa' : '#fafafa',
//           padding: '20px',
//           flex: 1,
//           position: 'relative',
//         }}
//       >
//         <h2>My MoodBoard</h2>
//         {items.map((item, index) => (
//           <img
//             key={index}
//             src={item.src}
//             alt=""
//             style={{ width: '100px', margin: '10px' }}
//           />
//         ))}
//       </div>
//     );
//   }
  
//   export default MoodBoard;