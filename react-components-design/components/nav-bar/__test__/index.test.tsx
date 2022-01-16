/*
 * @Author: wangDong Xu
 * @Date: 2022-01-16 10:18:26
 * @LastEditors: wangDong Xu
 * @LastEditTime: 2022-01-16 11:01:33
 * @Description: file content
 * @FilePath: /react-component-library/react-components-design/components/nav-bar/__test__/index.test.tsx
 * @motto: It's not hard to give up, but it must be cool to persist.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../';

test('NavBar 测试', () => {
  const component = renderer.create(<NavBar title="hello jest" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});