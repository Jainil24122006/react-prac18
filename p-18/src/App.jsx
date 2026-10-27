
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Headphones', price: 1500 }
  ]);

  const [selectedId, setSelectedId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  function handleSelect(e) {
    const id = e.target.value;
    setSelectedId(id);

    const product = products.find(
      (p) => p.id === Number(id)
    );

    if (product) {
      setName(product.name);
      setPrice(product.price);
    } else {
      setName('');
      setPrice('');
    }
  }

  function handleUpdate(e) {
    e.preventDefault();

    setProducts(
      products.map((p) =>
        p.id === Number(selectedId)
          ? { ...p, name: name, price: Number(price) }
          : p
      )
    );

    alert('Product Updated Successfully!');
  }

  return (
    <div>
      <h1>Product Management</h1>

      <h2>Select Product</h2>

      <select value={selectedId} onChange={handleSelect}>
        <option value="">Select Product</option>
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      {selectedId !== '' && (
        <form onSubmit={handleUpdate}>
          <h2>Edit Product</h2>

          <label>Product Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <br /><br />

          <label>Price: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            required
          />

          <br /><br />

          <button type="submit">Update Product</button>
        </form>
      )}

      <hr />

      <h2>Product List</h2>

      {products.map((p) => (
        <div key={p.id}>
          <p>Product Name: {p.name}</p>
          <p>Price: ₹{p.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
