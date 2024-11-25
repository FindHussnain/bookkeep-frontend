import React from 'react'
import { useState } from 'react';
function ImagePreview() {

    const [previewimg, setPreviewimg] = useState(null);

    const handleImagePreview = (event) => {

        const file = event.target.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onload = () => {

                setPreviewimg(reader.result)
            };
            reader.readAsDataURL(file)
        } else {
            setPreviewimg(null)
        }
    };



    return (
        <div>

            <input
                type="file"
                name="image"
                accept="image/*"
                required
                // onClick={setIsPreviewShow(true)}
                onChange={handleImagePreview}
                className='text-white'
            />

                <div
                    style={{
                        width: "150px",
                        height: "150px",
                        border: "2px dashed #ddd",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        backgroundColor: "#f9f9f9",
                        margin: "auto",
                    }}
                >
                    
                    {
                        previewimg ? (
                            <img
                                src={previewimg}
                                alt='preview'
                            />
                        ) : null
                    }

                </div>
            
        </div>
    )
}

export default ImagePreview
