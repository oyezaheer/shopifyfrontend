import React from 'react';

const ProductCard = ({ title, image, summary }) => {
    // Ensure `summary` is a string before calling `split()`
    const summaryPoints = typeof summary === 'string'
        ? summary.split('\n').filter(Boolean)
        : [];

    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover"
            />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <ul className="mt-4 space-y-2">
                    {summaryPoints.length > 0 ? (
                        summaryPoints.map((point, index) => (
                            <li
                                key={index}
                                className="text-gray-700 text-sm leading-relaxed"
                            >
                                • {point}
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-700 text-sm leading-relaxed">
                            No summary available
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ProductCard;
