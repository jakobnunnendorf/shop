import { render, screen } from '@testing-library/react';
import HomePage from './page';

it('renders without crashing', () => {
    render(<HomePage />);
    const myElem = screen.getByText('Willkommen');
    expect(myElem).toBeInTheDocument();
});
