// Filter Records by Date Range
// 🧩 Problem:
// You have a list of transactions with dates. Write a function that returns only the transactions that happened within a given date range.

const transactions = [
  { id: 1, amount: 100, date: "2023-01-10" },
  { id: 2, amount: 200, date: "2023-02-15" },
  { id: 3, amount: 300, date: "2023-03-20" },
  { id: 4, amount: 1100, date: "2021-01-10" },
  { id: 5, amount: 1200, date: "2023-02-05" },
  { id: 6, amount: 1300, date: "2023-01-20" },
];

const startDate = "2023-01-15";
const endDate = "2023-03-01";

function filterByDate(transaction, startDate, endDate){
    let tran =[];
    let sDate = new Date(startDate);
    let eDate = new Date(endDate);
    for(val of transaction){
        if (new Date(val['date'])>sDate && eDate>new Date(val['date'])){
            tran.push(val);
        }
    }
    return tran;
}

console.log(filterByDate(transactions, startDate, endDate));