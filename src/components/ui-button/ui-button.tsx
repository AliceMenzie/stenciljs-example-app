import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton {
  @Prop() label: string;
  @Prop() appearance: string;
  @Prop() type: string;

  render() {
    return (
      <Host>
        <button type={this.type} class={`${this.appearance}`}>
          {this.label}
          <slot></slot>
        </button>
      </Host>
    );
  }
}
