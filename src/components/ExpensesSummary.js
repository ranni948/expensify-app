import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal}) => {
    const expensesWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title" >Viewing <span>{expensesCount}</span> {expensesWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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