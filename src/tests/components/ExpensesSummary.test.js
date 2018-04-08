import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with one expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={4000}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={4} expensesTotal={10000}/>);
    expect(wrapper).toMatchSnapshot();
});