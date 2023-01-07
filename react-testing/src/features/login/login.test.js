import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
// waitFor
/* import axios from 'axios';
jest.mock('axios'); */
/*
- test suite: 
- mocking
- render snapshot
- assert
- 
*/
import Login from '.';

describe('Given Login form', () => {
  //   axios.post.mockReturnValue({ success: true });
  it('SHOULD show success message on login', () => {
    render(<Login />);
    const userName = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const submit = screen.getByText('Log in');

    fireEvent.change(userName, { target: { value: 'testuser' } });
    fireEvent.change(password, { target: { value: 'password' } });
    fireEvent.click(submit);
    const messageEl = screen.getByText('Login success');
    // const message = 'Login success';
    expect(messageEl).toBeInTheDocument();
  });
  //   it('SHOULD not allow to submit without data', () => {});
});
