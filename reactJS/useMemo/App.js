import { useMemo, useRef, useState } from "react";

function App() {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [products, setProducts] = useState([])

  const productNameRef = useRef()

  const handleSave = () => {
    setProducts(prevProduct => [...prevProduct, {
      name: productName,
      price: Number(productPrice)
    }])
    setProductName('')
    setProductPrice('')
    productNameRef.current.focus()    
  }

  const totalPrice = useMemo(() => {
    return products.reduce((total, prod) => {
      console.log('re-calculator')
      return total + prod.price
    }, 0)
  }, [products])

  console.log('re-render');
  

  return (
    <div className="App"
      style={{ margin: 20 }}
    >
      <div>
        <label
          htmlFor="product-name"
        >Product name</label>
        <input
          id="product-name"
          value={productName}
          placeholder="Enter your product name..."
          onChange={e => setProductName(e.target.value)}
          ref={productNameRef}
        />
      </div>
      <div>
        <label
          htmlFor="product-price"
        >Product price</label>
        <input
          id="product-price"
          value={productPrice}
          placeholder="Enter your product price..."
          onChange={e => setProductPrice(e.target.value)}
        />
      </div>
      <button
        onClick={handleSave}
      >Save</button>
      <hr />
      <div>
        Total: ${totalPrice}
      </div>
      <hr />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;