import React from 'react';
import { useDrag } from 'react-dnd';

function ImageTile({ src, alt }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'image',
    item: { src },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={dragRef}
      src={src}
      alt={alt}
      className="image-tile"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        width: '100px',
        margin: '5px',
      }}
    />
  );
}

export default ImageTile;
