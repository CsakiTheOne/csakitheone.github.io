import motd from '../res/values/motd.json';

export function setRandomMotd() {
    const motdIndex = Math.floor(Math.random() * motd.length);
    const motdText = motd[motdIndex];
    document.title = motdText;
}