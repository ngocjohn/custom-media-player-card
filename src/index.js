import { MyMediaPlayerCard } from './my-player-card';

// Registering the custom element
customElements.define('my-media-player-card', MyMediaPlayerCard);
console.info('My Media Player loaded');

window.customCards = window.customCards || [];
window.customCards.push({
  preview: true,
  type: 'my-media-player-card',
  name: 'My Media Player Card',
  description: 'This is my custom media player card',
});
