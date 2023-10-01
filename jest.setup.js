import '@testing-library/jest-dom';
import 'jest-styled-components';

const { env } = process;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...env };
});

afterEach(() => {
  jest.clearAllMocks();
  process.env = env;
});

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
