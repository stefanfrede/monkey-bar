import { LitElement, css, html } from 'lit-element';

class MonkeyBar extends LitElement {
  static get styles() {
    return css`
      :host {
        --white: hsl(216, 33%, 97%);
        --black: hsl(210, 24%, 16%);
        --progress-height: 1.5rem;
        --progress-font-size: 1rem;
        --progress-bg: hsl(214, 15%, 91%);
        --progress-border-radius: 0.25rem;
        --progress-box-shadow: inset 0 1px 2px rgba(var(--black), 0.075);
        --progress-bar-bg: hsl(330, 79%, 56%);
        --progress-bar-color: var(--white);
        --progress-bar-transition: width 0.6s ease;
        --progress-bar-striped-bg: rgba(229, 232, 235, 0.15);
        --progress-bar-striped-angle: 45deg;
        --progress-bar-animation-timing: 1s linear infinite;
        background-color: var(--monkey-bg, var(--progress-bg));
        border-radius: var(
          --monkey-border-radius,
          var(--progress-border-radius)
        );
        box-shadow: var(--monkey-box-shadow, var(--progress-box-shadow));
        display: flex;
        font-size: var(--monkey-font-size, var(--progress-font-size));
        font-weight: 700;
        height: var(--monkey-height, var(--progress-height));
        line-height: var(--monkey-height, var(--progress-height));
        overflow: hidden;
      }
      :host([hidden]) {
        display: none !important;
      }
      @keyframes progressbar-stripes {
        0% {
          background-position-x: var(--progress-height);
        }
      }
      .progressbar {
        background-color: var(--monkey-bar-bg, var(--progress-bar-bg));
        color: var(--monkey-bar-color, var(--progress-bar-color));
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        text-align: center;
        transition: var(
          --monkey-bar-transition,
          var(--progress-bar-transition)
        );
        white-space: nowrap;
      }
      .progressbar--striped {
        background-image: linear-gradient(
          var(--monkey-bar-striped-angle, var(--progress-bar-striped-angle)),
          var(--monkey-bar-striped-bg, var(--progress-bar-striped-bg)) 25%,
          transparent 25%,
          transparent 50%,
          var(--monkey-bar-striped-bg, var(--progress-bar-striped-bg)) 50%,
          var(--monkey-bar-striped-bg, var(--progress-bar-striped-bg)) 75%,
          transparent 75%,
          transparent
        );
        background-size: var(--monkey-height, var(--progress-height))
          var(--monkey-height, var(--progress-height));
      }
      .progressbar--animated {
        animation: progressbar-stripes
          var(
            --monkey-bar-animation-timing,
            var(--progress-bar-animation-timing)
          );
      }
    `;
  }

  static get properties() {
    return {
      min: {
        type: Number,
        reflect: true,
      },
      max: {
        type: Number,
        reflect: true,
      },
      now: {
        type: Number,
        reflect: true,
      },
      label: {
        type: Boolean,
      },
      striped: {
        type: Boolean,
      },
      animated: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.min = 0;
    this.max = 100;
    this.now = 0;
    this.label = false;
    this.striped = false;
    this.animated = false;
  }

  render() {
    return html`
      <div
        class="progressbar ${this.striped ? 'progressbar--striped' : ''} ${this
          .animated
          ? 'progressbar--animated'
          : ''}"
        role="progressbar"
        style="width: ${this.now}%;"
        aria-valuemin="${this.min}"
        aria-valuemax="${this.max}"
        aria-valuenow="${this.now}"
      >
        ${this.label ? this.now + '%' : ''}
      </div>
    `;
  }
}

customElements.define('monkey-bar', MonkeyBar);
