import React from 'react';

const products = [
  "Fire TV Stick",
  "Fire TV Stick Lite",
  "Echo Dot (3rd Gen) + Smart bulb",
  "Echo Dot (4th Gen)",
  "Fire TV Stick Plus",
  "Kindle E-Reader (10th Gen - 6 inch)",
  "Fire TV Stick 4K",
  "Echo Show 5",
  "Fire TV 4K Ultra Edition",
  "Echo Dot (4th Gen) with Clock",
  "Fire TV Cube"
];

export default function ProductTable() {
  return (
      <table className="table-auto border-collapse border border-black-500  w-[600px]">
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{product}</td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600 cursor-pointer">
                Check Price
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}
