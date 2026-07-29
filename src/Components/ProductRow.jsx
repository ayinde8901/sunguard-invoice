import "./ProductRow.css";

function ProductRow({ product, updateProduct, removeProduct }) {
  if (!product) {
    return null;
  }
  return (
    <div className="product-row">
      <input
        type="text"
        placeholder="Item Name"
        value={product.name}
        onChange={(e)=>
          updateProduct(
            product.id,
            "name",
            e.target.value
          )
        }
      />
      <input
        type="number"
        placeholder="Quantity"
        value={product.quantity}
        onChange={(e)=>
          updateProduct(
            product.id,
            "quantity",
            Number(e.target.value)
          )
        }
      />
      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e)=>
          updateProduct(
            product.id,
            "price",
            Number(e.target.value)
          )
        }
      />
      <p>
        ₦{(product.quantity * product.price).toLocaleString()}
      </p>
      <button
        className="remove-btn"
        onClick={()=>removeProduct(product.id)}
      >
        Delete
      </button>


    </div>

  )

}

export default ProductRow;