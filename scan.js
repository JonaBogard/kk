import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

import {app} from './firebase.js ';
const db=getFirestore(app);
const coleccion=collection(db,"productos");




const onScanSuccess = async (qrCodeMessage) => {
const data = await getDoc(doc(db, "productos", qrCodeMessage));
const producto = data.data();
document.querySelector("#result").innerHTML = `
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${producto.name}</td>
      <td>${producto.price}</td>
      <td>${producto.stock}</td>
      <td>${producto.description}</td>
    </tr>
  </tbody>
</table>
  `;
scan.clear();
document.querySelector("#reader").remove();
}
const onScanError = (errorMessage) => {
//swal.fire('Error al escanear El QR')
}
var scan = new Html5QrcodeScanner(
"reader", { fps: 10, qrbox: 250 });
scan.render(onScanSuccess, onScanError);