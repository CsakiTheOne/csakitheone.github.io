<script>
    import { setRandomSplashText } from "$lib/splash";
    import { onMount } from "svelte";
    import logoKolora from "$lib/media/logos/kolora.png";
    import logoWholesomeWare from "$lib/media/logos/wholesomeware.png";
    import logoMoriForgatos from "$lib/media/logos/mori-forgatos.jpg";

    onMount(() => {
        setRandomSplashText();
    });
</script>

<div class="screen">
    <a href="https://kolora.web.app">
        <img src={logoKolora} alt="Kolora Logo" />
    </a>
    <a href="/wholesomeware">
        <img src={logoWholesomeWare} alt="WholesomeWare Logo" />
    </a>
    <a href="https://moriforgatos.hu/">
        <img src={logoMoriForgatos} alt="Mori Forgatos Logo" />
    </a>
</div>

<style>
    @keyframes animBackgroundPos {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 0%;
        }
    }

    .screen {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 100svh;
        gap: 1rem;
        padding: 1rem;
        color: white;
        background: linear-gradient(
            -45deg,
            #4558a4,
            #d27b45,
            #4558a4,
            #931621,
            #4558a4
        );
        background-size: 400% 400%;
        animation: animBackgroundPos 20s infinite;
    }

    img {
        width: 20vw;
        max-width: 150px;
        border-radius: 50%;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
    }
</style>
