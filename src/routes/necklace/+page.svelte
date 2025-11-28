<script>
    import {
        Copy,
        Facebook,
        Github,
        Instagram,
        Mail,
        Palette,
        Phone,
        Play,
    } from "@lucide/svelte";
</script>

<main>
    <h1>Csáki nyaklánca</h1>
    <svg class="drop" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 1Q12 1 13 4 16 10 16 12A1 1 0 014 12Q4 10 7 4 8 1 10 1Z"
            stroke="var(--color-primary)"
            stroke-width=".2"
            fill="var(--color-surface)"
        />

        <path
            style="scale: .2; translate: 7.6px 9px; filter: drop-shadow(0 0 4px var(--color-primary));"
            d="M18,6H13A2,2 0 0,0 11,8V10.28C10.41,10.62 10,11.26 10,12A2,2 0 0,0 12,14C13.11,14 14,13.1 14,12C14,11.26 13.6,10.62 13,10.28V8H16V16H8V8H10V6H8L6,6V18H18M20,20H4V4H20M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20C21.11,22 22,21.1 22,20V4C22,2.89 21.11,2 20,2Z"
            fill="#000000"
        />
    </svg>
    <div class="section">
        <a
            style="background-color: var(--color-pink);"
            href="https://www.instagram.com/csakitheone/"
            target="_blank"
        >
            <Instagram />
            <span>Instagram</span>
        </a>
        <a
            style="background-color: var(--color-blue);"
            href="https://m.me/CsakiTheOne"
        >
            <Facebook />
            <span>Messenger</span>
        </a>
        <div class="split-button">
            <a
                style="background-color: var(--color-tertiary);"
                href="tel:+36705461747"
            >
                <Phone />
                <span>Telefon</span>
            </a>
            <button
                style="background-color: var(--color-tertiary);"
                onclick={() => {
                    navigator.clipboard.writeText("+36705461747");
                }}
            >
                <Copy />
            </button>
        </div>
        <div class="split-button">
            <a
                style="background-color: var(--color-red);"
                href="mailto:jockahun@gmail.com"
            >
                <Mail />
                <span>Email</span>
            </a>
            <button
                style="background-color: var(--color-red);"
                onclick={() => {
                    navigator.clipboard.writeText("jockahun@gmail.com");
                }}
            >
                <Copy />
            </button>
        </div>
    </div>
    <div class="section">
        <a
            style="background-color: var(--color-red);"
            href="https://kolora.web.app"
        >
            <Palette />
            <span>Kolora Egyesület</span>
        </a>
    </div>
    <div class="section">
        <a
            style="background-color: #323232; color: var(--color-on-surface);"
            href="https://github.com/CsakiTheOne"
        >
            <Github />
            <span>GitHub</span>
        </a>
        <a
            style="background-color: var(--color-primary); color: var(--color-on-primary);"
            href="https://play.google.com/store/apps/dev?id=8177011913013516936"
        >
            <Play />
            <span>Google Play Store</span>
        </a>
    </div>
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        --color-primary: #dbc66e;
        --color-on-primary: #3a3000;
        --color-secondary: #d1c6a1;
        --color-on-secondary: #363016;
        --color-tertiary: #a9d0b3;
        --color-on-tertiary: #143723;
        --color-surface: #15130b;
        --color-on-surface: #e8e2d4;
        --color-pink: #ff66a3;
        --color-blue: #66b2ff;
        --color-red: #ff6666;
        background-color: var(--color-surface);
        color: var(--color-on-surface);
        font:
            16px Arial,
            Helvetica,
            sans-serif;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        padding: 16px;
    }

    svg.drop {
        position: relative;
        width: 256px;
        aspect-ratio: 1 / 1;
    }

    .section {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    a,
    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 16px;
        padding: 16px;
        background-color: var(--color-primary);
        color: var(--color-on-primary);
        border-radius: 24px;
        text-decoration: none;
        font-size: 18px;
    }

    .split-button {
        display: flex;
        gap: 2px;
    }

    .split-button > :first-child {
        flex: 1;
        border-radius: 24px 8px 8px 24px !important;
    }

    .split-button > :last-child {
        aspect-ratio: 1 / 1;
        border-radius: 8px 24px 24px 8px !important;
    }
</style>
