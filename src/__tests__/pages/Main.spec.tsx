import React from 'react';
import { render } from '@testing-library/react';
import Main from '../../pages/Main';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Main page', () => {
  it('should render the template name', () => {
    const { getByText } = render(<Main />);

    const templateNameElement = getByText('React + TypeScript template');

    expect(templateNameElement).toBeTruthy();
  });

  it('should render about link', () => {
    const { getByText } = render(<Main />);

    const aboutElement = getByText('About');

    expect(aboutElement).toBeTruthy();
  });
});
