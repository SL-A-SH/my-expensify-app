import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense object', () => {
    const action = removeExpense({ id: '123ert' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123ert'
    });
});

test('should setup edit expense object', () => {
    const action = editExpense('qwe', {
        note: 'New Note Value'
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'qwe',
        updates: {
            note: 'New Note Value'
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 12345,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});