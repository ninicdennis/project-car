import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Homepage', () => {
	it('renders with no errors', () => {
		render(<Home />);
		expect(screen.getByTestId('homepage-main')).toBeInTheDocument();
	});
});
