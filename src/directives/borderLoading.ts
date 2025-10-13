import type { DirectiveBinding } from 'vue';
import { elem } from 'ph-utils/dom';

function removeLoading(el: HTMLElement) {
  const $inner = elem('.l-loading-inner', el)[0];
  if ($inner != null) el.removeChild($inner);
  el.style.removeProperty('--l-loading-width');
  el.style.removeProperty('--l-loading-height');
  el.style.removeProperty('--l-loading-timing');
}

function addLoading(el: HTMLElement, timing?: number) {
  const rect = el.getBoundingClientRect();
  const borderRadius = getComputedStyle(el).borderRadius;
  el.style.setProperty('--l-loading-border-radius', borderRadius);
  el.style.setProperty('--l-loading-width', `${Math.floor(rect.width)}px`);
  el.style.setProperty('--l-loading-height', `${Math.floor(rect.height)}px`);
  if (timing != null) {
    el.style.setProperty('--l-loading-timing', `${timing}s`);
  }

  el.style.setProperty('position', 'relative');
  let $inner = elem('.l-loading-inner', el)[0];
  if ($inner != null) return;
  $inner = document.createElement('span');
  $inner.classList.add('l-loading-inner');
  el.appendChild($inner);
}

const BorderLoadingDirective = (el: HTMLElement, binding: DirectiveBinding) => {
  const { value } = binding;
  if (value === true || value > 0) {
    // 动画持续时间
    let timing = undefined;
    if (typeof value === 'number' && value > 0) {
      timing = value;
    }
    addLoading(el, timing);
  } else {
    removeLoading(el);
  }
};

export default BorderLoadingDirective;
