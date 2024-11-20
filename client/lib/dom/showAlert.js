import { isString } from '../utils/index.js';
import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';

export function showAlert(
  node,
  message = '오류가 발생했습니다.',
  timeout = 1000
) {
  if (isString(node)) node = getNode(node);

  node.textContent = message;

  addClass(node, 'is-active');

  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}
