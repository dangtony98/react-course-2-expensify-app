export default (expenses) => {
    let amountArr, sum;
    
    amountArr = expenses.map((expense) => (expense.amount));
    console.log(amountArr);
    sum = amountArr.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
    console.log(sum);

    return sum;
};