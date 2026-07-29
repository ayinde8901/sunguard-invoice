import "./InvoicePreview.css";
import logo from "../Assets/sunguardlogo-removebg-preview (2).png";




function InvoicePreview({
    products,
    customer,
invoiceNumber
}) {
const totalAmount = products.reduce(
(total, product)=>
total + (product.quantity * product.price),
0);
return(
<div className="invoice-preview" id="invoice">
{/* Company Branding */}
<div className="pdf-header">
<img src={logo}alt="Sunguard Logo"/>
<div>
{/* <h1>SUNGUARD</h1> */}
<p>Solar Installation | CCTV Security Systems</p>
<p>Reliable Energy & Security Solutions</p>
 <p>sunguardsystem@outlook.com</p>
 <p className="whatsapp"> 09030959063</p>
</div>
</div>
<hr/>
<div className="invoice-title">
<div className="client-info">
<h3>Bill To:</h3>
<p>Customer Name: {customer.name}</p>
<p>Phone: {customer.phone}</p>
<p>Address: {customer.address}</p>
</div>

<div className="invoice-meta">
<h2><strong>INVOICE DETAILS:</strong></h2>
<p><strong>Invoice No:</strong> {invoiceNumber}</p>
<p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
</div>

</div>




<table>
<thead>
<tr>
<th>Item</th>
<th>Qty</th>
<th> Unit Price</th>
<th>Total</th>
</tr>
</thead>
<tbody>
{products.map((product)=>(
<tr key={product.id}>
<td>{product.name}</td>
<td>{product.quantity}</td>
<td>₦{product.price.toLocaleString()}</td>
<td>₦{(product.quantity * product.price).toLocaleString()}</td>
</tr>
))}
</tbody>
</table>
<div className="total">
Grand Total: <br /> ₦{totalAmount.toLocaleString()}
</div>
<p className="thank">Thank you for choosing Sunguard.Your Safety. Your Energy. Our Priority</p>
</div>


)


}



export default InvoicePreview;