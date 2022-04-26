// eslint-disable-next-line no-unused-vars
import React from 'react';

import { render, screen } from '@testing-library/react';

import { Button } from '@components/index';

describe('Button component tests', () => {
  test('Button text should be displayed', () => {
    render(<Button text='Wirvi Button' />);
    const element = screen.getByText(/Wirvi Button/i);
    expect(element).toBeInTheDocument();
  });
});
