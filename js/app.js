document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.querySelector('#new-order-form');
  orderForm.addEventListener('submit', handleFormSubmit)

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);


  // document.addEventListener('click', handleDeleteOne)

  // const deleteOne = document.querySelectorAll('#delete-order');
  // // deleteOne.addEventListener('click', handleDeleteOne);
  // deleteOne.forEach((order) => {
  //   order.addEventListener('click', handleDeleteOne)
  // });

  const orderList = document.querySelector('#recent-orders')
  orderList.addEventListener('click', handleDeleteOne)

})


const handleDeleteAll = function() {
  const allOrders = document.querySelector('#recent-orders');
  allOrders.innerHTML = "";
}


const handleDeleteOne = function(event) {
  if(event.target.id == "delete-order"){
      // console.log(event.target.parentElement);

      const order = event.target.parentElement;
      order.parentElement.removeChild(order)
  }

}

const handleFormSubmit = function(event) {
  event.preventDefault();
  // console.log(event.target.name.value);\
  const newOrderList = createNewOrderList(event.target);

  const newOrder = document.querySelector('#recent-orders');
  newOrder.appendChild(newOrderList);
  event.target.reset();
}


const createNewOrderList = function(form) {

  const newList = document.createElement('li');
  // newList.classList.add('recent-order')
  newList.id = "recent-order"


  const resultName = document.createElement('p');
  resultName.textContent = `Name: ${form.name.value}`;
  newList.appendChild(resultName);

  const resultAddress = document.createElement('p');
  resultAddress.textContent = `Address: ${form.address.value}`
  newList.appendChild(resultAddress);

  const resultPizzaTypeQuantity = document.createElement('p');
  resultPizzaTypeQuantity.textContent = `Order: ${form.pizzatype.value} x ${form.quantity.value}`;
  newList.appendChild(resultPizzaTypeQuantity);

  const deleteSingleOrder = document.createElement('button');
  deleteSingleOrder.innerHTML = "Delete Order";
  deleteSingleOrder.id = "delete-order";
  newList.appendChild(deleteSingleOrder);

  return newList;
};
