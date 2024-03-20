import { LitElement, html } from 'lit';
import { styleMap } from 'lit-html/directives/style-map';
import { extractColors } from './getColors.js';
import {
  prevBtn,
  nextBtn,
  volumeBtn,
  volumeMinus,
  volumePlus,
} from './my-player-card.icons';
import { mdiDotsVertical, mdiPlayBoxMultiple } from '@mdi/js';
import idle from './img/media_player.png';
import { fireEvent } from 'custom-card-helpers';
import styles from './my-player-card.styles.js';

// Defining the custom element class
export class MyMediaPlayerCard extends LitElement {
  // Properties definition
  _hass;
  static get properties() {
    return {
      _config: {}, // Configuration object
      audio: { type: String },
      entityId: { type: String },
      entityState: { type: String },
      isPlaying: { type: Boolean }, // Add isPlaying property
      isPaused: { type: Boolean }, // Add isPlaying property
      isIdle: { type: Boolean }, // Add isPlaying property
      isStandby: { type: Boolean }, // Add isPlaying property
      isUnavailable: { type: Boolean }, // Add isPlaying property
      isOff: { type: Boolean }, // Add isPlaying property
      isActive: { type: Boolean }, // Add isPlaying property
      picture: { type: String },
      progress: { type: Number }, // Current media progress
      mediaPosition: { type: Number }, // Current media position
      mediaDuration: { type: Number }, // Total media duration
      volume: { type: Number },
      backgroundColor: { type: String },
      backgroundColorRGB: { type: String },
      foregroundColorRGB: { type: String },
      foregroundColor: { type: String },
    };
  }
  // Method to set configuration
  setConfig(config) {
    this._config = config;
    if (this._config) {
      this.entityId = config.entity;
      this.audio = config.audio;
    }
    if (this._hass) {
      this.hass = this._hass;
    }
  }
  set hass(hass) {
    this._hass = hass;
    this.stateObj = hass.states[this.entityId];
    if (this.stateObj) {
      this.entityState = this.stateObj.state;
      this.isPlaying = this.entityState === 'playing';
      this.isPaused = this.entityState === 'paused';
      this.isIdle = this.entityState === 'idle';
      this.isStandby = this.entityState === 'standby';
      this.isUnavailable = this.entityState === 'unavailable';
      this.isOff = this.entityState === 'off';
      this.isActive = !this.isOff && !this.isUnavailable && !this.isIdle;
      let entityPicture = this.stateObj.attributes.entity_picture;
      this.picture = entityPicture ? entityPicture : idle;
      this.volume = Math.round(this.stateObj.attributes.volume_level * 100);
    }
  }

  static styles = [styles];

  // Constructor
  constructor() {
    super();
    // Initial values for progress, mediaPosition, and mediaDuration
    this.progress = 0;
    this.mediaPosition = 0;
    this.mediaDuration = 0;
    this.audio = '';
    this._animationFrameId = null; // Animation frame ID for progress update
    // Bind the toggleVolumeControl method to the class instance
    this.toggleVolumeControl = this.toggleVolumeControl.bind(this);
  }

  // Callback when the element is added to the DOM
  connectedCallback() {
    super.connectedCallback();
    this._startProgressUpdate(); // Start updating progress
  }

  // Callback when the element is removed from the DOM
  disconnectedCallback() {
    if (this._animationFrameId) {
      cancelAnimationFrame(this._animationFrameId); // Cancel progress update animation frame
    }
    super.disconnectedCallback();
  }

  // Method to start updating progress
  _startProgressUpdate() {
    const updateProgress = () => {
      if (this.stateObj) {
        // Extracting media information from Home Assistant state
        const { media_position_updated_at, media_position, media_duration } =
          this.stateObj.attributes;
        let percentage = 0;
        let updatedPosition = media_position;
        if (this.isPlaying) {
          // Calculating progress percentage when media is playing
          const updatedAt =
            new Date(media_position_updated_at).getTime() / 1000;
          const now = Date.now() / 1000;
          const elapsedTime = now - updatedAt;
          updatedPosition = media_position + elapsedTime;
          percentage = (updatedPosition / media_duration) * 100;
        } else if (this.isPaused) {
          // Calculating progress percentage when media is paused
          percentage = (media_position / media_duration) * 100;
        }
        // Updating properties
        this.progress = Math.min(percentage.toFixed(1), 100);
        this.mediaPosition = updatedPosition;
        this.mediaDuration = media_duration;
        this.requestUpdate(); // Requesting update to render changes
      }
      this._animationFrameId = requestAnimationFrame(updateProgress); // Scheduling next frame update
    };
    this._animationFrameId = requestAnimationFrame(updateProgress); // Starting the update loop
  }
  // Method to format time in MM:SS format
  _formatTime(seconds) {
    const pad = (num) => num.toString().padStart(2, '0');
    const minutes = pad(Math.floor(seconds / 60));
    const secondsLeft = pad(Math.floor(seconds % 60));
    return `${minutes}:${secondsLeft}`;
  }

  _renderControls() {
    return html`
      <div class="controls" style="--bgColor: ${this.backgroundColorRGB};">
        <button
          id="prevBtn"
          title="Previous track"
          class="control-btn"
          @click=${() => {
            this._serviceCmd('media_previous_track');
          }}
        >
          ${prevBtn}
        </button>
        <button
          id="playPauseBtn"
          title="${this.isPlaying ? 'Pause' : 'Play'}"
          class="control-btn ${this.isPlaying ? 'playing' : ''}"
          @click=${() => this._serviceCmd('media_play_pause')}
        >
          <span class="play"></span>
          <span class="pause"></span>
        </button>
        <button
          id="nextBtn"
          title="Next track"
          class="control-btn"
          @click=${() => this._serviceCmd('media_next_track')}
        >
          ${nextBtn}
        </button>
      </div>
    `;
  }

  _renderMediaInfo() {
    const mediaTitle = this.stateObj.attributes.media_title;
    const mediaArtist = this.stateObj.attributes.media_artist;

    return html`
      <div id="mediaInfo" class="metadata">
        <h2
          id="mediaTitle"
          style="text-wrap:${!this.isPlaying ? 'pretty' : ''};"
          class="media-title"
        >
          <span>${mediaTitle}</span>
        </h2>
        <p>${mediaArtist}</p>
      </div>
    `;
  }

  _renderProgresBar() {
    const formattedPosition = this._formatTime(this.mediaPosition); // Format media position
    const formattedDuration = this._formatTime(this.mediaDuration); // Format  media duration
    const progressStyles = {
      backgroundColor: `${this.backgroundColor}`,
      width: `${this.progress}%`,
    };
    return html`
      <div class="progress-info">
        <span>${formattedPosition}</span>
        <div
          class="progress-bar"
          style="background-color: rgba(${this.foregroundColorRGB},0.1);"
        >
          <div id="progress" style=${styleMap(progressStyles)}></div>
        </div>
        <span>${formattedDuration}</span>
      </div>
    `;
  }

  // Render the volume slider
  _renderVolumeSlider() {
    return html`
      <div class="volume-input">
        <button
          id="volumeMinus"
          @click=${() => this._serviceCmd('volume_down')}
        >
          ${volumeMinus}
        </button>
        <input
          class="slider"
          type="range"
          min="0"
          max="100"
          .value="${this.volume}"
          @input="${this.handleVolumeChange}"
          style="--value: ${this.volume}%; --bgColor: ${this.backgroundColor};"
        />
        <button id="volumePlus" @click=${() => this._serviceCmd('volume_up')}>
          ${volumePlus}
        </button>
        <p>${this.volume}</p>
      </div>
    `;
  }
  _renderBottomBar() {
    if (this.isActive) {
      return html`
        <div class="bottom-bar progress-visible">
          ${this._renderProgresBar()} ${this._renderVolumeSlider()}
          <div id="volumeBtn" class="volumeBtn">
            <button @click=${this.toggleVolumeControl}>${volumeBtn}</button>
          </div>
        </div>
      `;
    }
  }
  // Rendering method
  render() {
    // If state object is not available, render an unknown entity message
    if (!this.stateObj) {
      return html` <ha-card>Unknown entity: ${this._config.entity}</ha-card> `;
    }
    this._setBackgroundVibrantColor();
    this._getAndLogMediaInfoWidth();
    // Rendering the media player card
    const gradientBg = {
      backgroundColor: `${this.backgroundColor}`,
      backgroundImage: `linear-gradient(to right, rgba(${this.backgroundColorRGB}, 1) 60%, transparent 100%), radial-gradient(at bottom right, transparent 45%, rgba(${this.backgroundColorRGB}, 1) 85%), url('${this.picture}')`,
      backgroundSize: `contain`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `top right`,
    };
    const gradient = {
      backgroundImage: `linear-gradient(317deg, rgba(${this.backgroundColorRGB}, 0.8) 0%, rgba(${this.backgroundColorRGB}, 0.7) 45%, #ffffffcc 100%)`,
    };
    return html`
      <ha-card>
        <div
          id="my-media-player-card"
          style=${styleMap(this.isPlaying ? gradient : gradientBg)}
        >
          <ha-icon-button
            .path=${mdiDotsVertical}
            .label=${this._hass.localize(
              'ui.panel.lovelace.cards.show_more_info'
            )}
            class="more-info"
            @click=${this._openMoreInfoDialog}
          ></ha-icon-button>
          <div
            class="music-player ${this.isPlaying
              ? 'music-active'
              : this.isPaused
              ? 'music-active music-paused'
              : ''}"
          >
            <div class="content">
              ${this._renderMediaInfo()} ${this._renderControls()}
            </div>
            <div
              class="cover ${this.isPlaying ? 'cover-active' : ''}"
              style="background-image: url('${this.picture}');"
            ></div>
          </div>
          ${this._renderBottomBar()}
        </div>
      </ha-card>
    `;
  }

  toggleVolumeControl() {
    const bottomBar = this.shadowRoot.querySelector('.bottom-bar');
    bottomBar.classList.toggle('volume-visible');
    bottomBar.classList.toggle('progress-visible');
    if (this.audio) {
      this.playPopupSound();
    }
  }
  playPopupSound() {
    if (!this.audio) return;
    const audioUrl = this.audio;
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  }

  // Method to get the width of the mediaInfo div and log it to the console
  _getAndLogMediaInfoWidth() {
    const mediaInfoDiv = this.shadowRoot.getElementById('mediaInfo');
    const mediaTitle = this.shadowRoot.getElementById('mediaTitle');
    if (mediaInfoDiv && mediaTitle) {
      const mediaInfoWidth = mediaInfoDiv.clientWidth;
      const mediaTitleWidth = mediaTitle.clientWidth;
      if (mediaInfoWidth < mediaTitleWidth) {
        mediaTitle.classList.add('marquee', 'span');
        // Calculate animation speed
        const animationSpeed = (mediaTitleWidth / mediaInfoWidth) * 10;
        // Set animation speed as a CSS variable
        mediaTitle.style.setProperty('--speed', animationSpeed + 's');
      } else {
        mediaTitle.classList.remove('marquee', 'span');
        // Reset animation speed
        mediaTitle.style.removeProperty('--speed');
      }
    }
  }

  _setBackgroundVibrantColor() {
    if (this.picture !== this._picture) {
      // Check if entityPicture has changed
      this._picture = this.picture; // Update the last entityPicture
      if (this.picture) {
        extractColors(this.picture)
          .then(({ background, foreground, foregroundHEX }) => {
            this.backgroundColor = background ? background.hex : '';
            this.backgroundColorRGB = background
              ? background.rgb.join(', ')
              : '';
            this.foregroundColorRGB = foreground.join(', ');
            this.foregroundColor = foregroundHEX;
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    }
  }

  // Method to handle updating the volume_level attribute of the media player
  handleVolumeChange(event) {
    this.volume = event.target.value;
    setTimeout(() => {
      this.updateVolume();
    }, 500);
  }
  updateVolume() {
    const level_input = this.volume / 100;
    this._hass.callService('media_player', 'volume_set', {
      entity_id: this.entityId,
      volume_level: level_input, // Volume level should be between 0 and 1
    });
  }

  // Method to handle media control commands
  _serviceCmd(service_type) {
    this._hass.callService('media_player', service_type, {
      entity_id: this.entityId,
    });
  }
  // Method to open the more info dialog
  _openMoreInfoDialog() {
    const entityId = this.entityId;
    fireEvent(this, 'hass-more-info', { entityId });
  }

  static getStubConfig(hass) {
    // Filter for media players that are 'on' or 'playing'
    const mediaPlayers = Object.keys(hass.states).filter((entityId) => {
      return (
        entityId.startsWith('media_player.') &&
        (hass.states[entityId].state === 'paused' ||
          hass.states[entityId].state === 'playing')
      );
    });

    if (mediaPlayers.length === 0) {
      return { entity: 'media_player.default' }; // Default entity if none are 'on' or 'playing'
    }

    // Select a random media player entity ID from the filtered list
    const randomIndex = Math.floor(Math.random() * mediaPlayers.length);
    return { entity: mediaPlayers[randomIndex] };
  }
  // Method to get the size of the card
  getCardSize() {
    return 3;
  }
}
