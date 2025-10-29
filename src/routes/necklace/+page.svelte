<main>
    <svg class="drop" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 1Q12 1 13 4 16 10 16 12A1 1 0 014 12Q4 10 7 4 8 1 10 1Z"
            stroke="#FFFF00"
            stroke-width=".1"
        />
    </svg>
</main>

<style>
    :global(body) {
        --background-color: #121212;
        background-color: #121212;
        color: #e0e0e0;
        font: 16px Arial, Helvetica, sans-serif;
    }

    main {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    svg.drop {
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        width: 300px;
        height: 300px;
        filter: drop-shadow(0 0 10px #ffff00);
    }
</style>
