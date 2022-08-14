import { render, screen } from '@testing-library/react';
import Login from '../pages/login/index';
import '@testing-library/jest-dom';

describe('Loginpage', () => {
	it('renders with no errors', () => {
		render(<Login />);
		expect(screen.getByTestId('login-main')).toBeInTheDocument();
	});
});
