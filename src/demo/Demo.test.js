import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Demo from '.';

test('Demo Renders an H1', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Demo />);

  const result = renderer.getRenderOutput();
  expect(result.type).toBe('h1');
});
