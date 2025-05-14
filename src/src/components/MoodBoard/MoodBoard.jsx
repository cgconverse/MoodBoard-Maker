import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageTile from '../ImageTile';
import SearchBar from '../SearchBar';

function MoodBoard({ images = [] }) {

  

  return (
    <Container style={{ width: "100%" }}>

      <Row className="mt-4">
        {images.map((img) => (
          <Col key={img.id} xs={6} md={4} className="mb-4">
            <ImageTile src={img.urls.thumb} alt={img.alt_description} />
          </Col>
        ))}
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