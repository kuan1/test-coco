import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 创建一个封装 React 组件的 Web Component。
 * @param tagName 自定义元素名称
 * @param ReactComponent React 组件
 */
function coco<Props extends Record<string, any>>(
  tagName: string,
  ReactComponent: React.ComponentType<Props>
) {
  class ReactWebComponent extends HTMLElement {
    static observedAttributes: string[] = ['setting'];
    private root?: ReactDOM.Root;

    connectedCallback() {
      this._render();
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      if (oldValue !== newValue) {
        this._render();
      }
    }

    private _render() {
      const props = Object.fromEntries(
        Array.from(this.attributes).map((attr) => [attr.name, attr.value])
      ) as Props;

      if (!this.root) {
        this.root = ReactDOM.createRoot(this);
      }
      this.root.render(<ReactComponent {...props} />); // 渲染或更新
    }

    disconnectedCallback() {
      // 清理 root
      this.root?.unmount();
    }
  }

  customElements.define(tagName, ReactWebComponent);
}

export default coco;
