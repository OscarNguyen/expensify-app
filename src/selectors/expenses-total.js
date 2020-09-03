export default expenses => expenses.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
/* 
    let sum =0;
    expenses.map(expense => {
      sum += expense.amount;
    }); */
