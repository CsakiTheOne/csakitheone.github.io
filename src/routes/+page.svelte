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
    <div></div>
    <div class="logos">
        <a href="https://kolora.web.app">
            <img src={logoKolora} alt="Kolora Logo" />
        </a>
        <a href="https://play.google.com/store/apps/dev?id=8177011913013516936">
            <img src={logoWholesomeWare} alt="WholesomeWare Logo" />
        </a>
        <a href="https://moriforgatos.hu/">
            <img src={logoMoriForgatos} alt="Mori Forgatos Logo" />
        </a>
    </div>
    <p class="glass-card">
        Coding since 2012. In 2022, to celebrate 10 years of coding, I published
        this <a href="./10 year OG pack.zip">10 year OG pack</a>.
    </p>
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
        flex-direction: column;
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

    .logos {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        width: 100%;
    }

    .glass-card {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 1rem;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        max-width: 600px;
        text-align: center;
    }

    img {
        width: 20vw;
        max-width: 150px;
        border-radius: 50%;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
    }

    .screen a {
        color: turquoise;
    }
</style>
