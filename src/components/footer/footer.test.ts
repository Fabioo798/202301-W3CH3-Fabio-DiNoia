import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given Header component', () => {
  describe('When new Header is instanced', () => {
    test('Then it should create a new header class', () => {
      document.body.innerHTML = `<slot></slot>`;
      const mockTitle = 'Test';
      const element = new Footer('slot', mockTitle);
      expect(element).toBeInstanceOf(Footer);
    });

    test('Then it should render a new template', () => {
      const h1 = screen.getByText('Test');
      expect(h1).toBeInTheDocument();
    });
  });
});
