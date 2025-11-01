<main>
    <h1>Csáki nyaklánca</h1>
    <svg class="drop" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            style="filter: drop-shadow(0 0 1px #ffff00);"
            d="M10 1Q12 1 13 4 16 10 16 12A1 1 0 014 12Q4 10 7 4 8 1 10 1Z"
            stroke="#FFFF00"
            stroke-width=".1"
        />

        <path
            style="scale: .2; translate: 7.6px 9px; filter: drop-shadow(0 0 4px #ffff00);"
            d="M18,6H13A2,2 0 0,0 11,8V10.28C10.41,10.62 10,11.26 10,12A2,2 0 0,0 12,14C13.11,14 14,13.1 14,12C14,11.26 13.6,10.62 13,10.28V8H16V16H8V8H10V6H8L6,6V18H18M20,20H4V4H20M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20C21.11,22 22,21.1 22,20V4C22,2.89 21.11,2 20,2Z"
            fill="#000000"
        />
    </svg>
    <div class="links">
        <a
            style="background-color: #E1306C;"
            href="https://www.instagram.com/csakitheone/"
            target="_blank"
        >
            Instagram: @csakitheone
        </a>
        <a style="background-color: #0084FF;" href="https://m.me/CsakiTheOne">
            Messenger
        </a>
        <a style="background-color: #15A346;" href="tel:+36705461747">
            Telefon
        </a>
        <a style="background-color: #D44638;" href="mailto:jockahun@gmail.com">
            Email: jockahun@gmail.com
        </a>
    </div>
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        --background-color: #121212;
        background-color: #121212;
        color: #e0e0e0;
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
        gap: 16px;
        padding: 16px;
    }

    svg.drop {
        position: relative;
        width: 300px;
        height: 300px;
    }

    .links {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .links > a {
        padding: 16px;
        background-color: #333;
        color: #ddd;
        border-radius: 32px;
        text-decoration: none;
        font-size: 18px;
        text-align: center;
    }
</style>
