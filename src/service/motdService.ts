import motd from '../res/values/motd.json';

export function setRandomMotd() {
    function random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    const allMotd = [
        ...motd,
    ]
    const selectedMotd = allMotd[random(0, motd.length)];
    document.title = selectedMotd;
}