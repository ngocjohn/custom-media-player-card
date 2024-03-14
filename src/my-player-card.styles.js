import { css } from 'lit';

export default css`
  :host {
    --ha-card-border-width: 0px;
  }
  .music-player {
    border-radius: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    padding: 1rem 1rem 0.5rem;
    display: grid;
    align-items: center;
    color: rgb(0, 0, 0);
    box-sizing: content-box;
    transition: margin-top 0.7s ease-in-out 0s, padding 0.7s ease-in-out 0s,
      grid-row-gap 0.3s ease-in-out 0s, background-image 0.3s ease-in-out 0s;
    grid-template-columns: min-content 1fr;
    row-gap: 0.5rem;
  }
  .music-active {
    margin-top: 2.5rem;
    padding: 0px 1rem 0.5rem;
    row-gap: 0px;
    transition: all 0.7s ease-in 0s;
    background-color: #ffffffcc;
    background-image: linear-gradient(
      24deg,
      rgba(var(--mutedColorRgb), 0.8) 0%,
      rgba(var(--lightMutedColorRgb), 0.7) 65%,
      rgba(var(--lightMutedColorRgb), 0) 100%
    );
    &.music-paused {
      margin-top: 0;
      padding: 1rem;
    }
  }
  .cover {
    position: relative;
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1) 0.3s,
      border 0.8s linear 0.5s, background-image 0.8s linear 0.3s,
      box-shadow 0.8s 0.3s;
    display: flex;
    width: 150px;
    height: 150px;
    background-size: contain;
    border-radius: 0.75rem;
  }
  .cover-active {
    transform: translateY(-2rem);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px;
    border: 1px solid rgba(171, 171, 171, 0.8);
  }
  .content {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: initial;
    overflow: auto;
  }
  .metadata {
    text-align: center;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    white-space: nowrap;
    align-items: center;
    & h2 {
      margin: 0px;
      font-size: 1.2rem;
      text-transform: uppercase;
      display: flex;
      width: fit-content;
      letter-spacing: normal;
      font-weight: 700;
    }
    & p {
      margin: 5px 0px;
      font-size: 16px;
      font-weight: 400;
      white-space: normal;
    }
  }
  .controls {
    display: flex;
    align-items: normal;
    justify-content: space-around;
    padding-top: 0.5rem;
  }
  .control-btn,
  .volumeBtn button,
  .volume-input button {
    background: none;
    border: none;
    padding: 0rem;
    margin: 0px 10px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out 0s;
    &:hover {
      outline: none;
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
  .control-btn svg {
    width: 32px;
    height: 32px;
    filter: drop-shadow(rgba(0, 0, 0, 0.3) 0px 2px 2px);
  }
  .progress-bar {
    background-color: rgba(0, 0, 0, 0.1);
    height: 0.5rem;
    width: 100%;
    border-radius: 999px;
    overflow: hidden;
    display: flex;
    margin: 0px 0.7rem;
  }
  #progress {
    background-color: var(--darkMutedColorHex, #000);
    height: 100%;
    width: 0px;
    transition: all 1s ease-out 0s;
  }
  .time-info {
    display: flex;
    justify-content: space-between;
    padding: 0px 1px;
    font-size: 0.7rem;
  }
  .progress-info,
  .volume-input {
    flex-grow: 1;
    transition: opacity 0.5s ease 0s, visibility 0.5s ease 0s;
    opacity: 1;
    visibility: visible;
  }
  .progress-visible .volume-input,
  .volume-visible .progress-info {
    opacity: 0;
    visibility: hidden;
  }
  .progress-info {
    display: flex;
    align-items: center;
    font-size: smaller;
    width: 100%;
    flex-grow: 1;
  }
  .volume-input {
    display: flex;
    font-size: large;
    width: 88%;
    font-weight: 600;
    height: auto;
    align-items: center;
    position: absolute;
    & p {
      font-size: 0.8rem;
      margin: 0px;
    }
  }
  .slider {
    appearance: none;
    width: 100%;
    height: 0.5rem;
    border-radius: 5px;
    background-position: initial;
    background-size: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(
      to right,
      var(--darkMutedColorHex, #000) var(--value),
      transparent var(--value)
    );
    outline: none;
    opacity: 0.7;
    transition: opacity 1s ease-out 0s;
    &::-webkit-slider-thumb {
      appearance: none;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: var(--darkMutedColorHex, #000);
      cursor: pointer;
    }
  }
  .bottom-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: visibility 0.3s ease 0s;
    grid-column: 1 / -1;
  }
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .marquee {
    overflow: hidden;
    white-space: nowrap;
    & span {
      display: inline-block;
      animation: marquee var(--speed) linear 1.5s;
      animation-iteration-count: infinite;
    }
  }

  #playPauseBtn {
    display: flex;
    position: relative;
    width: 51px;
    height: 51px;
  }
  .play,
  .pause {
    display: block;
    position: absolute;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>');
    background-size: 100% 100%;
    width: 51px;
    height: 51px;
    transition: all 0.25s linear 0s;
    &::before,
    &::after {
      border-radius: 1000px;
      content: '';
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
    }
  }
  .play::before {
    box-shadow: rgba(255, 255, 255, 0) 0px 0px 0px;
    transition: all 0.25s linear 0s;
  }
  .playing {
    .play {
      opacity: 0;
    }
    .pause {
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>');
      opacity: 1;
      &::before {
        animation: 1.5s ease-in-out 0s infinite normal none running audio1;
      }
      &::after {
        animation: 2.2s ease-in-out 0s infinite normal none running audio2;
      }
    }
  }
  .playing {
    position: relative;
    width: 51px;
    height: 51px;
    display: flex;
    &:hover {
      transform: scale(1.1);
      .play::before {
        box-shadow: rgba(255, 238, 125, 0.8) 0px 0px 12px;
      }
    }
  }
  .animate-audio1 {
    animation: 1.5s ease-in-out 0s infinite normal none running audio1;
  }
  @keyframes audio1 {
    0%,
    100% {
      box-shadow: 0 0 0 0.4em rgba(var(--mutedColorRgb), 0.4);
    }
    25% {
      box-shadow: 0 0 0 0.15em rgba(var(--mutedColorRgb), 0.15);
    }
    50% {
      box-shadow: 0 0 0 0.55em rgba(var(--mutedColorRgb), 0.55);
    }
    75% {
      box-shadow: 0 0 0 0.25em rgba(var(--mutedColorRgb), 0.25);
    }
  }
  .animate-audio2 {
    animation: 2.2s ease-in-out 0s infinite normal none running audio2;
  }
  @keyframes audio2 {
    0%,
    100% {
      box-shadow: 0 0 0 0.75em rgba(var(--mutedColorRgb), 0.15);
    }
    25% {
      box-shadow: 0 0 0 0.4em rgba(var(--mutedColorRgb), 0.3);
    }
    50% {
      box-shadow: 0 0 0 0.15em rgba(var(--mutedColorRgb), 0.05);
    }
    75% {
      box-shadow: 0 0 0 0.55em rgba(var(--mutedColorRgb), 0.45);
    }
  }
`;
