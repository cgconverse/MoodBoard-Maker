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
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          objectFit: "cover"
         }}
         />
    </div>
  );
}

export default ImageTile;
