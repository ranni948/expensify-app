import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal}) => {
    const expensesWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    
    return (
        <div>
            <h1>Viewing {expensesCount} {expensesWord} totalling {formattedExpensesTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const filteredExpenses = selectExpenses(state.expenses, state.filters);
    return  {
        expensesCount: filteredExpenses.length,
        expensesTotal: selectExpensesTotal(filteredExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);