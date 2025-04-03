import React, { useState, useEffect } from "react";
import Instance from "../AxiosConfig";


function IssueInventoryTable() {

  const [issuedInventory, setIssuedInventory] = useState([]);
  

  useEffect(() => {
    const fetchIssuedInventory = async () => {
      try {
        const response = await Instance.get("/add/getIssuedInventory");
        setIssuedInventory(response.data);
      } catch (error) {
        console.error("Error fetching issued inventory:", error);
      }
    };
  
    fetchIssuedInventory();
  }, []);

  return (
    <div className="wrapper">
      <div className="main flex items-start justify-center">
       
      </div>
          <div className="mt-10 text-black p-10">
            <h2 className="text-xl font-bold text-center text-blue-900">
              Issued Inventory Table
            </h2>
            <table className="w-full border-collapse border border-blue-900 mt-4 text-black">
              <thead>
                <tr className="bg-blue-300">
                  <th className="border border-blue-900 px-4 py-2">Category</th>
                  <th className="border border-blue-900 px-4 py-2">
                    Item Name
                  </th>
                  <th className="border border-blue-900 px-4 py-2">
                    Department Name
                  </th>

                  <th className="border border-blue-900 px-4 py-2">
                    Faculty Name
                  </th>
                  <th className="border border-blue-900 px-4 py-2">Quantity</th>
                  <th className="border border-blue-900 px-4 py-2">
                    Return Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {issuedInventory.length > 0 ? (
                  issuedInventory.flatMap((category, categoryIndex) =>
                    category.issuedItems.length > 0
                      ? category.issuedItems.map((item, itemIndex) => (
                          <tr
                            key={`${categoryIndex}-${itemIndex}`}
                            className="text-center bg-blue-100 text-black"
                          >
                            <td className="border border-blue-900 px-4 py-2">
                              {category.category}
                            </td>
                            <td className="border border-blue-900 px-4 py-2">
                              {item.itemName}
                            </td>
                            <td className="border border-blue-900 px-4 py-2">
                              {item.issuedToDept}
                            </td>
                            <td className="border border-blue-900 px-4 py-2">
                              {item.issuedToFaculty}
                            </td>
                            <td className="border border-blue-900 px-4 py-2">
                              {item.issuedQty}
                            </td>
                            <td className="border border-blue-900 px-4 py-2">
                              {item.returnStatus}
                            </td>
                          </tr>
                        ))
                      : null
                  )
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      No issued inventory
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
    </div>
  );
}

export default IssueInventoryTable;
