import { render, screen } from '@testing-library/react';
import Register from '../pages/signup/index';
import '@testing-library/jest-dom';

describe('Signin Page', () => {
	it('renders with no errors', () => {
		render(<Register />);
		expect(screen.getByTestId('signup-main')).toBeInTheDocument();
	});
});
