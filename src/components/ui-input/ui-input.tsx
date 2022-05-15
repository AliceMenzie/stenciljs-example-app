import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ui-input',
  styleUrl: 'ui-input.css',
  shadow: true,
})
export class UiInput {
  @Prop() type: string;
  @Prop() value: string;
  @Prop() active: string;

  render() {
    return <input class={`${this.active === 'true' ? 'active' : ''}`} value={this.value} type={this.type}></input>;
  }
}
