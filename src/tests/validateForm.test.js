import validateForm from '../utils/validateForm';

test('repeats', () => {
    expect(validateForm({ password: "password123", repeatPassword: "password123" })).toStrictEqual([
        {
            error: false,
            msg: "Passed all validation.",
            color: "green"
        }
    ]);
});

test('doesnt repeat', () => {
    expect(validateForm({ password: "password123", repeatPassword: "password12" })).toStrictEqual([
        {
            error: true,
            msg: "Passwords don't match.",
            color: "red"
        }
    ]);
});