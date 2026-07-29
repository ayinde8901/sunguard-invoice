import "./InvoiceForm.css";
import ProductRow from "./ProductRow";


function InvoiceForm({
    products,
    setProducts,
    customer,
    setCustomer
}) {



const addProduct = ()=>{setProducts([...products,
{id:Date.now(),
    name:"",
    quantity:1,
    price:0
}
]);
};
const updateProduct = (id, field, value)=>{setProducts(
products.map((product)=>product.id === id?
{...product,[field]:value}:product));
};
const removeProduct = (id)=>{setProducts(products.filter(
(product)=> product.id !== id));
};
return(
<div className="invoice-form">
<h2>Create Invoice</h2>
<h3>Customer Details</h3>
<input type="text"placeholder="Customer Name"
value={customer.name}
onChange={(e)=>setCustomer({...customer,name:e.target.value})
}
/>
<input type="text"placeholder="Phone Number"
value={customer.phone}onChange={(e)=>setCustomer({...customer,phone:e.target.value})}
/>
<input type="text" placeholder="Address"value={customer.address}onChange={(e)=>
setCustomer({...customer,address:e.target.value})}
/>
<h3>Products</h3>
{products.map((product)=>(<ProductRow key={product.id}
product={product}
updateProduct={updateProduct}
removeProduct={removeProduct}
/>
))}
<button onClick={addProduct}> + Add Item</button>
</div>
)}
export default InvoiceForm;