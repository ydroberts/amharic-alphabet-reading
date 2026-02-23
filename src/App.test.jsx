import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Amharic Learning App', () => {
    it('renders the main title', () => {
        // Basic smoke test
        render(<App />);
        const titleElement = screen.getByText(/Amharic Learning App/i);
        expect(titleElement).toBeInTheDocument();
    });
});
