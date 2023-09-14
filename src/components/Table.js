import React from "react";

const Table = (props) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

    return (
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((rowData) => {
            return (
              <tr key={rowData.year}>
              <td>{rowData.year}</td>
              <td>{formatter.format(rowData.savingsEndOfYear)}</td>
              <td>{formatter.format(rowData.yearlyInterest)}</td>
              <td>{formatter.format(rowData.savingsEndOfYear - props.initialInvestment-rowData.yearlyContribution*rowData.year)}</td>
              <td>{formatter.format(props.initialInvestment + rowData.yearlyContribution * rowData.year)}</td>
            </tr>
            )
          } )}
        </tbody>
      </table>
    )
}

export default Table;