export function setRandomSplashText() {
    const texts: string[] = [
        "Hi!",
        "Have a nice day!",
        "You're awesome!",
        "You're amazing!",
        "Nice to meet you!",
    ];

    document.title = texts[Math.floor(Math.random() * texts.length)];
}