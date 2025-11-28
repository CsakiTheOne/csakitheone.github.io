<script>
    import Snowfall from "../../components/Snowfall.svelte";
</script>

<div class="screen">
    <!--Snowfall /-->
    {#each [0, 1, 2, 3, 4, 5, 6] as i}
        <div class="img-container" style="position: absolute; top: {Math.random() * 70}vh; left: {Math.random() * 80}vw; animation-delay: {Math.random() * 3}s;">
            <img
                src="https://i.pinimg.com/originals/d4/8a/ac/d48aacdb727b0aaf15fbab89d4723a40.gif"
                alt=""
            />
        </div>
    {/each}
</div>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .screen {
        width: 100vw;
        height: 100vh;
        background-color: black;
        color: white;
        position: relative;
    }

    .img-container {
        width: 120px;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        animation: bob 3s ease-in-out infinite;
    }

    @keyframes bob {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    img {
        width: 110%;
        height: 110%;
        mix-blend-mode: lighten;
    }
</style>
