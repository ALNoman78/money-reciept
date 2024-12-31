import React, { useState } from "react";

const TableTwo = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "John Doe", price: 0, quantity: 0, total: 0 },
        { id: 2, name: "Jane Smith", price: 0, quantity: 0, total: 0 },
        { id: 3, name: "Alice Johnson", price: 0, quantity: 0, total: 0 },
    ]);

    // Handle price and quantity changes
    const handleInputChange = (id, field, value) => {
        const updatedProducts = products.map((product) => {
            if (product.id === id) {
                const updatedProduct = {
                    ...product,
                    [field]: value,
                };
                updatedProduct.total = updatedProduct.price * updatedProduct.quantity;
                return updatedProduct;
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    // Calculate grand total
    const grandTotal = products.reduce((sum, product) => sum + product.total, 0);

    return (
        <div className="bg-gray-100 p-6 min-h-screen">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Dynamic Table with Total Price</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-300 text-left text-gray-600">Product Name</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-gray-600">Per Price</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-gray-600">Quantity</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-gray-600">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-100">
                                    <td className="px-4 py-2 border border-gray-300">{product.name}</td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        <input
                                            type="number"
                                            className="w-full p-2 border rounded"
                                            value={product.price}
                                            onChange={(e) =>
                                                handleInputChange(product.id, "price", parseFloat(e.target.value) || 0)
                                            }
                                        />
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        <input
                                            type="number"
                                            className="w-full p-2 border rounded"
                                            value={product.quantity}
                                            onChange={(e) =>
                                                handleInputChange(product.id, "quantity", parseFloat(e.target.value) || 0)
                                            }
                                        />
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">{product.total.toFixed(2)}</td>
                                </tr>
                            ))}
                            <tr className="bg-gray-200">
                                <td colSpan="3" className="px-4 py-2 border border-gray-300 text-right font-bold">
                                    Grand Total:
                                </td>
                                <td className="px-4 py-2 border border-gray-300 font-bold">{grandTotal.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TableTwo;
