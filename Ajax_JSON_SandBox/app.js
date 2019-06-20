const customerBtn = document.querySelector('#button1');
const customersBtn = document.querySelector('#button2');

customerBtn.addEventListener('click',showCustomer);
customersBtn.addEventListener('click',showAllCustomers);

function showCustomer(e) {
  console.log('Showing selected customer');
  const xhr = new XMLHttpRequest();

  xhr.open('GET','customer.json',true);
  xhr.onload = function() {
    console.log('Status',this.status);
    if(this.status === 200){
      const customer = JSON.parse(this.responseText);
      const output = `<ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      document.getElementById("customer").innerHTML = output;
    }
  }
  xhr.onerror = function(){
    console.log('Error',this.status);
  }
  xhr.send();
}

function showAllCustomers(e) {
  console.log('Showing all customers');
  const xhr = new XMLHttpRequest();

  xhr.open('GET','customers.json',true);
  xhr.onload = function() {
    console.log('Status',this.status);
    if(this.status === 200){
      const customers = JSON.parse(this.responseText);
      let output='';
      customers.forEach(customer => {
         output += `<ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });
      document.getElementById("customers").innerHTML = output;
    }
  }
  xhr.onerror = function(){
    console.log('Error',this.status);
  }
  xhr.send();
}