import { afterEach, beforeEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { resetAll, verifyAll } from 'strong-mock';

beforeEach(resetAll);

// Cleanup after each test
afterEach(() => {
  cleanup();
  verifyAll(); // using strong-mock, ensure all expectations are met
});
