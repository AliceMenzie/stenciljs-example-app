import { Component, h } from '@stencil/core';
import { UiButton } from '../ui-button/ui-button';
import { UiCard } from '../ui-card/ui-card';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <UiButton />
        <UiCard />
      </div>
    );
  }
}
