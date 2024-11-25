import React, { useState } from 'react'
// import './card.css'
import { bookBio } from '../constents/BookConstant'
import DeleteModal from './modal/DeleteModal'

function BookCard() {

    const [card, setCard] = useState(bookBio);

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const handleDelete = () => {
        setIsDeleteOpen(true); // Open the modal
    };

    const closeDeleteModal = () => {
        setIsDeleteOpen(false); // Close the modal
    };

    return (
        <div>
            <div className='flexCard'>

                {/* {JSON.stringify(card)} */}

                {
                    card.map((cards, id) => (

                        <div className="card bg-white" key={id}>
                            <img src={cards.image} alt='img/fail' className="card-image" />
                            <div className="card-content">

                                <h2 className="card-title">
                                    {cards.title}
                                </h2>

                                <p className="card-description">
                                    {cards.description}
                                </p>
                            </div>
                            <div>
                                <div>
                                    <button className='cardbtn'>Edit</button>
                                </div>
                                <div>
                                    <button className='cardbtnred' onClick={handleDelete}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <DeleteModal isOpen={isDeleteOpen} onClose={closeDeleteModal} />
        </div>
    )
}

export default BookCard
