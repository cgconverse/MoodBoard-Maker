import React from 'react';
import { useDrag } from 'react-dnd';
import Image from 'react-bootstrap/Image';

function ImageTile({ src, alt }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'image',
    item: { src },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}>
      <Image 
        src={src} 
        alt={alt}  
        style={{ 
          width:"400px",
          height: "300px",
          borderRadius: "12px",
          objectFit: "cover"
         }}
        thumbnail />
    </div>
  );
}

export default ImageTile;
