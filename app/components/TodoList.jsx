import React from 'react';

export default function TodoList({ products }) {
  return (
    <table className="table table-info table-bordered">
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
