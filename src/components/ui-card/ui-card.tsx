import { Component, h, Prop, getAssetPath, State } from '@stencil/core';

@Component({
  tag: 'ui-card',
  styleUrl: 'ui-card.css',
  shadow: false,
})
export class UiCard {
  @Prop() imageFront = 'star.png';
  @Prop() imageBack = 'star.png';

  @State() selectValue: string;
  @State() submitted: boolean = false;

  handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log(this.selectValue);
    this.submitted = true;
  };

  render() {
    const logoFront = getAssetPath(`../assets/images/${this.imageFront}`);
    const logoBack = getAssetPath(`../assets/images/${this.imageBack}`);

    if (this.submitted) {
      return (
        <div class="card-container-back">
          <img src={logoBack} alt="form submission illustration" />
          <div class="pill">You selected out {this.selectValue} of 5</div>
          <div class="card-containter-back-content">
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
          </div>
        </div>
      );
    } else {
      return (
        <div class="card-container">
          <div class="image-container">
            <img src={logoFront} alt="star" />
          </div>
          <div class="content">
            <h3>How did we do?</h3>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </div>

          <div class="form">
            <div>
              <ui-input type="button" value="1" active={this.selectValue === '1' ? 'true' : 'false'} onClick={() => (this.selectValue = '1')}>
                1
              </ui-input>
              <ui-input type="button" value="2" active={this.selectValue === '2' ? 'true' : 'false'} onClick={() => (this.selectValue = '2')}>
                2
              </ui-input>
              <ui-input type="button" value="3" active={this.selectValue === '3' ? 'true' : 'false'} onClick={() => (this.selectValue = '3')}>
                3
              </ui-input>
              <ui-input type="button" value="4" active={this.selectValue === '4' ? 'true' : 'false'} onClick={() => (this.selectValue = '4')}>
                4
              </ui-input>
              <ui-input type="button" value="5" active={this.selectValue === '5' ? 'true' : 'false'} onClick={() => (this.selectValue = '5')}>
                5
              </ui-input>
            </div>
            <ui-button type="submit" label="submit" onClick={this.handleSubmit}></ui-button>
          </div>
        </div>
      );
    }
  }
}
