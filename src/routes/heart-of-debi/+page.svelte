<script>
    import firstDateImage1 from "$lib/debi/album/first-date/PXL_20241004_162610482.jpg";
    import firstDateImage2 from "$lib/debi/album/first-date/PXL_20241004_155041641.MP.jpg";
    import firstDateImage3 from "$lib/debi/album/first-date/IMG_20241005_122234_704.jpg";
    import firstDateImage4 from "$lib/debi/album/first-date/IMG_20241005_122230_577.jpg";

    let startDate = $state(new Date(2024, 9, 4));
    let daysSinceStart = $derived(
        Math.floor((Date.now() - startDate.getTime()) / 1000 / 60 / 60 / 24),
    );
</script>

<main>
    💔
</main>
<!--main>
    <p style="text-align: center;">
        <button
            onclick={() => {
                alert("Írj rám, hozzunk össze egy talit 😄");
                window.location =
                    "https://www.messenger.com/t/100024477404430/";
            }}
        >
            + Emlék hozzáadása
        </button>
    </p>
    <h3>2024. Október 10.</h3>
    <p>
        Nem a mai dátum vagy véletlenül? Csak mert 10/10 vagy. És épp ezért
        olyan nehéz a helyzet. A zenei stílusban még keressük azt a közös pontet
        😄 de más tereken egyre jobban látom, hogy mennyire ellennénk. Igényled
        a párod közelségét és az érintést és ezzel ugyanígy vagyok.
        Legszívesebben megkérdezném, hogy nem hagyjuk ki az ismerkedés fázist és
        nem költözünk össze rögtön? Tudom, ez nem így működik, viszont
        megkönnyítené a dolgokat, ha nem csak egy-egy délutánokra utazhatnék
        oda. Szóval... Nem ismersz Egerszegen valami jó szálláshelyet? 😂 Ha
        annyit megteszel, hogy utánajársz, hogy valamelyik egyetemi koli
        kivehető-e nem hallgatók számára vagy van-e egyéb kinda olcsóbb
        lehetőség, akkor megígérem, hogy egy hétvégére meglátogatlak.
    </p>
    <div class="card">
        <h4>Üzlet ajánlat</h4>
        <ul>
            <li><b>Adsz:</b> infót szállás lehetőségekről Zalaegerszegen</li>
            <li><b>Kapsz:</b> egy teljes közös hétvége (2 vagy 3 nap)</li>
        </ul>
    </div>
    <p>
        Btw kicsit lelkiztem egy közös ismerőssel és tőle is kérdeztem, hogy
        nem-e tud valami szállást. 😅 Sajnos nem, de egy próbát megért.
    </p>
    <p>
        Oh, amúgy esetleg írj, hogyha ez a kis napló szerű dolog tetszett a
        szíven. Nem tudtam mit írjak rá, hogy nem talizunk, de mégis akartam
        valamit ennyi idő után. Szóval mondd, hogy jöhet-e még ilyen vagy
        hagyjuk meg ezt a szívet a közös emlékeknek. Amik először ritkák lesznek
        (ha lesznek), de pont ezért lennének különlegesek.
    </p>
    <h3>2024. Október 4.</h3>
    <img src={firstDateImage1} alt="" />
    <img src={firstDateImage2} alt="" />
    <img src={firstDateImage3} alt="" />
    <img src={firstDateImage4} alt="" />
    <h3>A szív</h3>
    <p class="poem">
        A távolság szárazság, ami elhervaszt egy virágot.<br />
        A távolság radír, ami kitörli a színeket és szürkévé teszi a világot.<br
        />
        A távolság kés, ami elvághat egymástól embereket.<br />
        De könnyű leküzdeni, nem kell más, csak egy kis igyekezet.<br />
        Hát adj így egy kezet!<br />
        Ha itt leszel, én is itt leszek. Vonat jegyet veszek.<br />
        És... Bárhol is vagy... Megyek.<br />
    </p>

    <p>
        Legalábbis erre lennék képes, ha nem egyedül küzdök. És még többre is,
        ahogy azt a <a
            href="https://play.google.com/store/apps/details?id=com.csakitheone.distanthug"
            >Distant Hug</a
        > létezése bizonyítja. 😄
    </p>
    <p>
        Emlegettem párszor, de gondoltam alkotok Neked is valamit: Ezt a szívet.
        Bár egy egyszerű tárgynak látszik, amit vihetsz ide-oda, de hogy mi van
        beleírva, azt bárhol, bármikor - és a legfontosabb - bármilyen messziről
        át tudom írni. Írhatok a szívbe a talikról kis szövegeket, közös
        képeket, videókat valami buliról ahová elmentünk vagy bármi mást. ÉS MÉG
        A TELÓDON SE FOGLAL HELYET! 😂
    </p>
    <p>
        Ha van ötleted, hogy mit írjak bele, zaklass bármikor! Remélem, hogy ez
        erőt ad és közelebb hoz / közel tart egymáshoz minket.
    </p>

    <hr />

    <p style="text-align: center;">
        Ez a szív {daysSinceStart} napja dobog.<br />
        ({startDate.toLocaleDateString()})
    </p>
</main-->

<style>
    :global(*) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :global(body) {
        background-color: #ff9aaa;
        color: #000;
        font-family: Arial, Helvetica, sans-serif;
    }

    main {
        display: grid;
        grid-template-columns: [full-start] 1rem [breakout-start] 1rem [content-start] 1fr [content-end] 1rem [breakout-end] 1rem [full-end];
        row-gap: 1rem;
        padding: 1rem 0;
    }

    main * {
        grid-column: content;
    }

    h1,
    h2,
    h3 {
        background-color: #c0d1fc;
        padding: 0.5rem;
        text-align: center;
        grid-column: full;
    }

    .breakout {
        grid-column: breakout;
    }

    .full-width {
        grid-column: full;
    }

    hr {
        border: 1px solid #000;
        width: 100%;
        grid-column: full;
    }

    p {
        font-size: 1.2rem;
    }

    p.poem {
        font-family: "Times New Roman", Times, serif;
        font-style: italic;
    }

    button {
        appearance: none;
        border: none;
        background: #c0d1fc;
        color: #000;
        font-weight: bold;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 1rem;
        box-shadow: #00000080 0 3px 0;
    }

    a {
        background: #c0d1fc;
        color: #822;
        padding: 2px;
        text-decoration: underline;
    }

    img {
        width: 100%;
        height: auto;
    }

    li {
        margin-left: 1rem;
    }

    .card {
        background: #ffffff44;
        padding: 1rem;
        border-radius: 1rem;
    }
</style>
