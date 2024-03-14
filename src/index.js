import { MyMediaPlayerCard } from './my-player-card';

// Registering the custom element
customElements.define('my-media-player-card', MyMediaPlayerCard);
console.info('My Media Player loaded');

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'my-media-player-card',
  name: 'my-media-player-card',
  description: 'my custom media card',
});
