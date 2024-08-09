import React from 'react';

const ProductCard = ({ title, image, summary }) => {
    // Ensure `summary` is a string before calling `split()`
    const summaryPoints = typeof summary === 'string'
        ? summary.split('\n').filter(Boolean)
        : [];

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">{title}</h2>
            <ul className="mt-2">
                {summaryPoints.length > 0 ? (
                    summaryPoints.map((point, index) => (
                        <li key={index} className="text-gray-600">{point}</li>
                    ))
                ) : (
                    <li className="text-gray-600">No summary available</li>
                )}
            </ul>
        </div>
    );
};

export default ProductCard;
