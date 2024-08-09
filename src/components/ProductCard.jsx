import React from 'react';

const ProductCard = ({ title, image, summary }) => {
    // Ensure `summary` is a string before calling `split()`
    const summaryPoints = typeof summary === 'string'
        ? summary.split('\n').filter(Boolean)
        : [];

    return (
        <div className="mb-10 shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-slate-200">
            <div className="flex-1 p-6 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
                <ul className="space-y-2">
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
            <div className="md:w-1/3">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contains"
                />
            </div>
        </div>
    );
};

export default ProductCard;
