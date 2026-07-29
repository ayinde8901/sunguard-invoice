import { useState } from "react";
import Header from "./Components/Header";
import InvoiceForm from "./Components/InvoiceForm";
import InvoicePreview from "./Components/InvoicePreview";
import Button from "./Components/Button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
const [products, setProducts] = useState([

{
id:1,
name:"",
quantity:1,
price:0
}

]);
const [customer, setCustomer] = useState({
name:"",
phone:"",
address:""
});


// =========================
// Invoice Number System
// =========================


const [invoiceNumber, setInvoiceNumber] = useState(()=>{
const savedNumber = localStorage.getItem("invoiceNumber");
return savedNumber 
? Number(savedNumber)
: 1;
});
const formattedInvoiceNumber = 
`SG-${String(invoiceNumber).padStart(4,"0")}`;
// =========================
// Generate PDF
// =========================
const generatePDF = ()=>{
const invoice = document.getElementById("invoice");
html2canvas(invoice, {
scale:2,
useCORS:true,
scrollY:-window.scrollY
}).then((canvas)=>{
const imageData = canvas.toDataURL("image/png");
const pdf = new jsPDF(
"p",
"mm",
"a4"
);
const pdfWidth = pdf.internal.pageSize.getWidth();
const pdfHeight = pdf.internal.pageSize.getHeight();
const imageWidth = pdfWidth - 20;
const imageHeight = 
(canvas.height * imageWidth) / canvas.width;
let heightLeft = imageHeight;
let position = 10;
pdf.addImage(
imageData,
"PNG",
10,
position,
imageWidth,
imageHeight
);
heightLeft -= pdfHeight;
while(heightLeft > 0){
position = heightLeft - imageHeight;

pdf.addPage();
pdf.addImage(
imageData,
"PNG",
10,

position,

imageWidth,

imageHeight

);



heightLeft -= pdfHeight;


}




// =========================
// PDF File Name
// =========================


// const clientName = customer.name

// ? customer.name
// .replace(/\s+/g,"-")
// .toUpperCase()

// : "CLIENT";



// pdf.save(

// `${clientName}-Invoice-${formattedInvoiceNumber}.pdf`

// );

const clientName = customer.name
.trim()
.replace(/[^a-zA-Z0-9]/g, "-")
.toUpperCase();


const fileName = clientName 
? `${clientName}-INVOICE-${formattedInvoiceNumber}.pdf`
: `CLIENT-INVOICE-${formattedInvoiceNumber}.pdf`;


pdf.save(fileName);


// =========================
// Increase Invoice Number
// =========================


const nextNumber = invoiceNumber + 1;



setInvoiceNumber(nextNumber);



localStorage.setItem(

"invoiceNumber",

nextNumber

);



});


};





return (


<div className="App">


<Header />



<InvoiceForm

products={products}

setProducts={setProducts}

customer={customer}

setCustomer={setCustomer}

/>




<InvoicePreview


products={products}

customer={customer}

invoiceNumber={formattedInvoiceNumber}

/>




<Button

text="Create PDF Invoice"

onClick={generatePDF}

/>



</div>


);


}

export default App;