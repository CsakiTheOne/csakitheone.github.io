<script>
    const events = [
        {
            title: "Holtszezon 2026",
            date: "Feb 20 - Feb 22",
            day: "Feb 20",
            time: "",
            loc: "Veszprém",
            link: "https://www.facebook.com/events/25684424244546267/",
        },
        {
            title: "Ex Symposion lapszámbemutató",
            date: "Fri, Feb 20",
            day: "Feb 20",
            time: "4:30 PM",
            loc: "S-stúdió / Művészetek Háza",
            link: "https://www.facebook.com/events/1538498343929597/",
        },
        {
            title: "Összeér - Varga Bence (Zaporozsec) és Szép Renáta estje",
            date: "Fri, Feb 20",
            day: "Feb 20",
            time: "6 PM",
            loc: "Papírkutya",
            link: "https://www.facebook.com/events/819016504505517/",
        },
        {
            title: "Tóth Krisztina - Szeleknek fordít (kötetbemutató)",
            date: "Fri, Feb 20",
            day: "Feb 20",
            time: "6 PM",
            loc: "FOTON Audiovizuális Centrum",
            link: "https://www.facebook.com/events/1366527514786920/",
        },
        {
            title: "Magyar Boszorkánykönyv – Kötetbemutató",
            date: "Fri, Feb 20",
            day: "Feb 20",
            time: "6 PM",
            loc: "TEREM",
            link: "https://www.facebook.com/events/1785255275494136/",
        },
        {
            title: "odaLÖKött KÖLtészet - Bekuckózás SLAM",
            date: "Fri, Feb 20",
            day: "Feb 20",
            time: "7 PM",
            loc: "Incognito Kávézó",
            link: "https://www.facebook.com/events/1178838661071437/",
        },
        {
            title: "Sárkánygarbó koncert",
            date: "Fri, Feb 20",
            day: "Feb 20",
            time: "8 PM",
            loc: "Papírkutya",
            link: "https://www.facebook.com/events/1368302827939029/",
        },
        {
            title: "HIP HOP: Ribveil Ravi, Czaffy, Zsé, Feo",
            date: "Fri, Feb 20",
            day: "Feb 20",
            time: "9 PM",
            loc: "TEREM",
            link: "https://www.facebook.com/events/886124211069905/",
        },
        {
            title: "4. Magyar Krimifesztivál",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "10 AM",
            loc: "FOTON Audiovizuális Centrum",
            link: "https://www.facebook.com/events/1249411753706052/",
        },
        {
            title: "Igaz történetek - a magyar true crime",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "10 AM",
            loc: "FOTON Audiovizuális Centrum",
            link: "https://www.facebook.com/events/2050433915714546/",
        },
        {
            title: "Régi bűnök árnyéka",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "11:30 AM",
            loc: "FOTON Audiovizuális Centrum",
            link: "https://www.facebook.com/events/1424625682614999/",
        },
        {
            title: "Tollforgatók kreatív írás műhely @ ZUG",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "1 PM",
            loc: "Eötvös Károly Könyvtár",
            link: "https://www.facebook.com/events/1241384504559378/",
        },
        {
            title: "Agatha Christie, Conan Doyle? Klasszikusok nyomában",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "2:30 PM",
            loc: "FOTON Audiovizuális Centrum",
            link: "https://www.facebook.com/events/752198124611083/",
        },
        {
            title: "MIRE GONDOLT A KÖLTŐ? - Irodalomtanítás",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "2:30 PM",
            loc: "Incognito Kávézó",
            link: "https://www.facebook.com/events/1529470551665977/",
        },
        {
            title: "Kortárs irodalmi közösségek",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "2:45 PM",
            loc: "Eötvös Károly Könyvtár - ZUG",
            link: "https://www.facebook.com/events/867020222789133/",
        },
        {
            title: "Demokratikus prompt – közösségi AI-képalkotás",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "3 PM",
            loc: "fIxIr / Művészetek Háza",
            link: "https://www.facebook.com/events/1223016353297490/",
        },
        {
            title: "SÉD folyóirat kerekasztal-beszélgetés",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "3 PM",
            loc: "Wine & Vinyl Bar",
            link: "https://www.facebook.com/events/1793947407952183/",
        },
        {
            title: "Stranger Things-kibeszélő",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "4 PM",
            loc: "Incognito Kávézó",
            link: "https://www.facebook.com/events/895050833067075/",
        },
        {
            title: "Visky András - Illegalisták könyvbemutató",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "4 PM",
            loc: "Papírkutya",
            link: "https://www.facebook.com/events/1189617106214573/",
        },
        {
            title: "A farkába harapó kígyó - krimi a krimiben",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "4 PM",
            loc: "FOTON Audiovizuális Centrum",
            link: "https://www.facebook.com/events/1446929743451661/",
        },
        {
            title: "Szavak a VárUccából",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "4 PM",
            loc: "Wine & Vinyl Bar",
            link: "https://www.facebook.com/events/1631918478248133/",
        },
        {
            title: "A PUNK / Születésnapi beszélgetés Szilágyi Zoéval",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "4 PM",
            loc: "TEREM",
            link: "https://www.facebook.com/events/25256604034022376/",
        },
        {
            title: "MythOff - A Mítoszok Csatája",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "6 PM",
            loc: "FOTON Audiovizuális Centrum",
            link: "https://www.facebook.com/events/1003579022831115/",
        },
        {
            title: "Simon Marci – Hideg pizza kötetbemutató",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "6:30 PM",
            loc: "Papírkutya",
            link: "https://www.facebook.com/events/1055271376764781/",
        },
        {
            title: "Manga + Sport = Történetek",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "7 PM",
            loc: "S-stúdió / Művészetek Háza",
            link: "https://www.facebook.com/events/1071878881760012/",
        },
        {
            title: "PUNK koncert: P.F.A., Boline Ritual...",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "8 PM",
            loc: "TEREM",
            link: "https://www.facebook.com/events/1223646549211001/",
        },
        {
            title: "La Booum – Holtszezon edition / DJ-k",
            date: "Sat, Feb 21",
            day: "Feb 21",
            time: "9 PM",
            loc: "Wine & Vinyl Bar",
            link: "https://www.facebook.com/events/1197855482455687/",
        },
        {
            title: "SÁTÁNTANGÓ - Vetítés",
            date: "Sun, Feb 22",
            day: "Feb 22",
            time: "1 PM",
            loc: "FOTON Audiovizuális Centrum",
            link: "https://www.facebook.com/events/1219698119604215/",
        },
        {
            title: "Versműhely Simon Marcival",
            date: "Sun, Feb 22",
            day: "Feb 22",
            time: "2 PM",
            loc: "FOTON Audiovizuális Centrum",
            link: "https://www.facebook.com/events/1228672086040181/",
        },
        {
            title: "TÁRLATVEZETÉS: HATVAN (Szilágyi László)",
            date: "Sun, Feb 22",
            day: "Feb 22",
            time: "4 PM",
            loc: "Művészetek Háza Veszprém",
            link: "https://www.facebook.com/events/962663520021517/",
        },
        {
            title: "Beszélgetés Kemény Lilivel",
            date: "Sun, Feb 22",
            day: "Feb 22",
            time: "4 PM",
            loc: "FOTON Audiovizuális Centrum",
            link: "https://www.facebook.com/events/3439797469524608/",
        },
        {
            title: "TOP5 könyv Balla Gergővel",
            date: "Sun, Feb 22",
            day: "Feb 22",
            time: "5:15 PM",
            loc: "Incognito Kávézó",
            link: "https://www.facebook.com/events/26306224555652221/",
        },
        {
            title: "Tóth Marcsi: Erdő van idebenn - bemutató",
            date: "Sun, Feb 22",
            day: "Feb 22",
            time: "6:30 PM",
            loc: "Papírkutya",
            link: "https://www.facebook.com/events/1191300419357127/",
        },
        {
            title: "Költőtoll / FELHŐJÁRÁS",
            date: "Sun, Feb 22",
            day: "Feb 22",
            time: "6:30 PM",
            loc: "Incognito Kávézó",
            link: "https://www.facebook.com/events/1460883852281060/",
        },
        {
            title: "Vecsei H. Miklós - Közel lenni",
            date: "Sun, Feb 22",
            day: "Feb 22",
            time: "7:45 PM",
            loc: "FOTON Audiovizuális Centrum",
            link: "https://www.facebook.com/events/1146312640731344/",
        },
    ];

    let currentDay = "all";
    let searchTerm = "";

    $: filtered = events.filter((ev) => {
        const matchesSearch = ev.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesDay =
            currentDay === "all" || ev.date.includes(currentDay);
        return matchesSearch && matchesDay;
    });

    function setDay(day) {
        currentDay = day;
    }
</script>

<svelte:head>
    <title>Holtszezon 2026 - Programlista</title>
</svelte:head>

<header>
    <h1>Holtszezon 2026</h1>
    <p>Irodalmi Fesztivál & Programok</p>
</header>

<div class="controls">
    <input
        type="text"
        placeholder="Keresés programnév alapján..."
        bind:value={searchTerm}
    />
    <div class="filters">
        <button
            class="filter-btn"
            class:active={currentDay === "all"}
            on:click={() => setDay("all")}
        >
            MIND
        </button>
        <button
            class="filter-btn"
            class:active={currentDay === "Feb 20"}
            on:click={() => setDay("Feb 20")}
        >
            PÉNTEK
        </button>
        <button
            class="filter-btn"
            class:active={currentDay === "Feb 21"}
            on:click={() => setDay("Feb 21")}
        >
            SZOMBAT
        </button>
        <button
            class="filter-btn"
            class:active={currentDay === "Feb 22"}
            on:click={() => setDay("Feb 22")}
        >
            VASÁRNAP
        </button>
    </div>
</div>

<div class="event-grid">
    {#if filtered.length === 0}
        <div class="no-results">Nincs találat a keresési feltételeknek megfelelően.</div>
    {:else}
        {#each filtered as event (event.title)}
            <a
                class="event-card"
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div class="event-date">
                    {event.date}
                    {#if event.time}
                        | {event.time}
                    {/if}
                </div>
                <div class="event-title">{event.title}</div>
                <div class="event-location">Helyszín: {event.loc}</div>
            </a>
        {/each}
    {/if}
</div>

<style>
    :root {
        --primary: #34feb4;
        --black: #000000;
        --white: #ffffff;
        --shadow: 6px 6px 0px 0px #000000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Arial Black", Gadget, sans-serif;
    }

    :global(body) {
        background-color: var(--black) !important;
        color: var(--white);
        padding: 20px;
        line-height: 1.4;
    }

    header {
        max-width: 1000px;
        margin: 40px auto;
        border: 4px solid var(--white);
        background: var(--black);
        padding: 30px;
        box-shadow: 6px 6px 0px 0px var(--primary);
    }

    h1 {
        font-size: clamp(2rem, 8vw, 4rem);
        text-transform: uppercase;
        margin-bottom: 10px;
        line-height: 1;
    }

    .controls {
        max-width: 1000px;
        margin: 30px auto;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    #searchBar {
        flex: 1;
        min-width: 300px;
        padding: 15px;
        border: 4px solid var(--black);
        font-size: 1.2rem;
        box-shadow: var(--shadow);
        outline: none;
    }

    input {
        flex: 1;
        min-width: 300px;
        padding: 15px;
        border: 4px solid var(--white);
        font-size: 1.2rem;
        box-shadow: 4px 4px 0px 0px var(--primary);
        outline: none;
        background-color: var(--black);
        color: var(--white);
    }

    .filters {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .filter-btn {
        padding: 10px 20px;
        border: 4px solid var(--white);
        background: var(--black);
        color: var(--white);
        cursor: pointer;
        font-weight: bold;
        box-shadow: 4px 4px 0px 0px var(--primary);
        transition: all 0.1s;
    }

    .filter-btn:active {
        box-shadow: 0px 0px 0px 0px var(--primary);
        transform: translate(4px, 4px);
    }

    .filter-btn.active {
        background: var(--primary);
        color: var(--black);
    }

    .event-grid {
        max-width: 1000px;
        margin: 40px auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 30px;
    }

    .event-card {
        border: 4px solid var(--white);
        padding: 20px;
        background: var(--black);
        box-shadow: 6px 6px 0px 0px var(--primary);
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: var(--white);
        transition: all 0.2s;
    }

    .event-card:hover {
        transform: translate(-2px, -2px);
        box-shadow: 8px 8px 0px 0px var(--primary);
        background: #111111;
        color: var(--primary);
    }

    .event-date {
        background: var(--primary);
        display: inline-block;
        padding: 2px 8px;
        border: 2px solid var(--white);
        font-size: 0.9rem;
        color: var(--black);
        margin-bottom: 10px;
        align-self: flex-start;
    }

    .event-title {
        font-size: 1.5rem;
        margin-bottom: 15px;
        flex-grow: 1;
        text-transform: uppercase;
    }

    .event-location {
        font-size: 0.85rem;
        font-family: "Courier New", Courier, monospace;
        border-top: 2px solid var(--primary);
        padding-top: 10px;
        color: var(--primary);
    }

    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 50px;
        font-size: 1.5rem;
    }

    @media (max-width: 600px) {
        :global(body) {
            padding: 10px;
        }
        header {
            padding: 15px;
        }
        .event-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
