import React from 'react';

function ImagePreview({ file }) {
  if (!file) return null; // Don't render if there's no file

  // Generate a preview URL from the file
  const previewImg = URL.createObjectURL(file);

  return (
    <div
      style={{
        width: '150px',
        height: '150px',
        border: '2px dashed #ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        margin: 'auto',
      }}
    >
      <img
        src={previewImg}
        alt="Preview"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
    </div>
  );
}

export default ImagePreview;
