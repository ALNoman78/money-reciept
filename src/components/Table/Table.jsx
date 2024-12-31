import React, { useState } from "react";

const Table = () => {

    const [value1 , setValue1] = useState(null)
    const [value2 , setValue2] = useState(null)

    const handlePriceValue = e => {
        setValue1(e.target.value)
        console.log('Product price', setValue1(e.target.value));
    }

    const handlePriceValue2 = e => {
        setValue2(e.target.value)
        console.log('items' , setValue2(e.target.value));
    }
    const result = value1 && value2 ? value1 * value2 : ''
    const data = [
        { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
        // { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Editor" },
        // { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "Viewer" },
    ];

    return (
        <div className="bg-gray-100 p-6 min-h-screen">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Responsive Table</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-300 text-left text-gray-600">Product Name</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-gray-600">Per price</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-gray-600">Total</th>
                                {/* <th className="px-4 py-2 border border-gray-300 text-left text-gray-600">Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* {data.map((user) => ( */}
                                <tr className="hover:bg-gray-100">
                                    <td className="px-4 py-2 border border-gray-300"> Jhone Dhoe</td>
                                    {/* <td className="px-4 py-2 border border-gray-300">{user.email}</td> */}
                                    <td className="border border-gray-300">
                                        <span className="flex items-center border border-black">
                                        <input onChange={handlePriceValue} type="text" className="w-full p-2 border-0 text-center ml-2" />
                                        <span className="text-2xl ml-2">*</span>
                                        <input onChange={ handlePriceValue2} type="text" className="w-full p-2 border-0 text-center ml-2" />
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">{result}</td>
                                    {/* <td className="px-4 py-2 border border-gray-300">
                                        <button className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 mr-2">
                                            Edit
                                        </button>
                                        <button className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600">
                                            Delete
                                        </button>
                                    </td> */}
                                </tr>
                            {/* // ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
