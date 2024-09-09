import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function History() {
  const [textToCopy, setTextToCopy] = useState(""); // The text you want to copy
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl font-bold text-center">History</h1>
      {copyStatus && <p className="text-red-500">Text copied to clipboard!</p>}
      {/* table */}
      {/* add button to copy */}
      <button className="btn btn-square w-64">Add Transaction</button>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Buyer's Name</th>
              <th className="border border-gray-300 px-4 py-2">Product</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">
                Buyer's Email
              </th>
              <th className="border border-gray-300 px-4 py-2">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">John</td>
              <td className="border border-gray-300 px-4 py-2">Sneakers</td>
              <td className="border border-gray-300 px-4 py-2">3 pairs</td>
              <td className="border border-gray-300 px-4 py-2">$150</td>
              <td className="border border-gray-300 px-4 py-2">2022-05-10</td>
              <td className="border border-gray-300 px-4 py-2">Delivered</td>
              <td className="border border-gray-300 px-4 py-2">
                john@example.com
              </td>
              <CopyToClipboard
                text="https://example.com/order/123"
                onCopy={onCopyText}
              >
                <td
                  className="border border-gray-300 px-4 py-2"
                  //   onClick={setTextToCopy("https://example.com/order/123")}
                >
                  https://example.com/order/123
                </td>
              </CopyToClipboard>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Jane</td>
              <td className="border border-gray-300 px-4 py-2">Shoes</td>
              <td className="border border-gray-300 px-4 py-2">2 pairs</td>
              <td className="border border-gray-300 px-4 py-2">$200</td>
              <td className="border border-gray-300 px-4 py-2">2022-05-15</td>
              <td className="border border-gray-300 px-4 py-2">Pending</td>
              <td className="border border-gray-300 px-4 py-2">
                jane@example.com
              </td>
              <CopyToClipboard
                text="https://example.com/order/456"
                onCopy={onCopyText}
              >
                <td
                  className="border border-gray-300 px-4 py-2"
                  //   onClick={setTextToCopy("https://example.com/order/456")}
                >
                  https://example.com/order/456
                </td>
              </CopyToClipboard>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
