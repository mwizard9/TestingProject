import React, { useState } from 'react';

const SelectImage = () => {
    const imagesArray = [
        { id: 1, src: 'img-1.jpg', votes: 0 },
        { id: 2, src: 'img-2.jpg', votes: 0 },
        { id: 3, src: 'img-3.jpg', votes: 0 },
        { id: 4, src: 'img-4.jpg', votes: 0 },
        { id: 5, src: 'pack.jpg', votes: 0 },
        { id: 6, src: 'veld.jpg', votes: 0 },
        { id: 7, src: 'blank.jpg', votes: 0 },
        { id: 8, src: 'daytime.jpeg', votes: 0 },
        { id: 9, src: 'nighttime.jpeg', votes: 0 },
        { id: 10, src: 'portait.jpeg', votes: 0 },
    ];

    const [images, setImages] = useState(imagesArray);

    const updateVotes = (id) => {
        const updatedImages = images.map((image) => {
            if (image.id === id) {
                image.votes += 1;
            }
            return image;
        });
        setImages(updatedImages);
    };

    const displayImage = (id) => {
        const num = Math.floor(Math.random() * images.length);
        const selectedImage = images[num];
        updateVotes(selectedImage.id);
        document.canvas.src = selectedImage.src;
    };

    const displayImage2 = (id) => {
        const num2 = Math.floor(Math.random() * images.length);
        const selectedImage2 = images[num2];
        updateVotes(selectedImage2.id);
        document.canva.src = selectedImage2.src;
    };

    return (
        <>
            <div className="container">
                <div className="container mx-3 my-5 d-flex flex-row">
                    <div className="container">
                        <img
                            onClick={() => displayImage(1)}
                            src="blank.jpg"
                            alt="canvas"
                            name="canvas"
                            style={{ height: '500px', width: '500px' }}
                        />
                        <br />
                        <span className="thumb">thumb_up</span>
                        <span className="vote-count">{images[0].votes}</span>
                    </div>
                    <div className="container">
                        <img
                            onClick={() => displayImage2(2)}
                            src="img-1.jpg"
                            alt="canva"
                            name="canva"
                            style={{ height: '500px', width: '500px' }}
                        />
                        <br />
                        <span className="thumb">thumb_up</span>
                        <span className="vote-count">{images[1].votes}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectImage;