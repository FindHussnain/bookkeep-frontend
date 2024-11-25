import React from 'react'
import Modal from 'react-modal'
import ImagePreview from '../ImagePreview'

const AddingBookDashboard = ({ isOpen, onClose }) => {

    return (

        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Backdrop
                    },
                }}
                contentLabel="Example Modal"
                className="flex items-center justify-center h-screen"
            >
                <div className="bg-white shadow-md rounded-lg py-2 px-4 w-full h-[550px] max-w-md relative">
                    <h1 className="text-xl font-semibold text-gray-800 mb-1">Add A Book</h1>
                    <p className="text-gray-600 mb-1">
                        Please provide a title, description, and the file you want to upload.
                    </p>
                    <form >
                        {/* <!-- Title Field --> */}
                        <div className="mb-1">
                            <label for="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter the title"
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* <!-- Description Field --> */}
                        <div className="mb-1">
                            <label for="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="3"
                                placeholder="Enter a brief description"
                                className="block resize-none w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            ></textarea>
                        </div>

                        {/* <!-- File Upload Field --> */}
                        <div className="mb-1">
                            <label for="file" className="block text-sm font-medium text-gray-700 mb-2">Select File</label>
                            <ImagePreview />
                        </div>

                        {/* <!-- Submit Button --> */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Submit
                        </button>
                    </form>
                    {/* close btn */}
                    <button
                        className="absolute top-3 right-3 text-gray-500 font-bold hover:text-gray-700 rounded-xl px-1 outline outline-1 outline-slate-800/50 opacity-60 hover:opacity-95"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

            </Modal>
        </div>
    )
}

export default AddingBookDashboard
