<script>
    const startingDay = 12;
    const today = new Date();
    const days = new Array(today.getDate() - startingDay + 1)
        .fill(0)
        .map((_, i) => i + startingDay);

    let selectedDay = $state(12);

    const daysContent = {
        day12: {
            geminiSummary: `🎙️ AI és Ökológia
Az este cherry élménybeszámolójával indult, aki a NotebookLM segítségével tanult ökológiát. Az AI által generált podcast annyira jól sikerült, hogy mély filozófiai kérdéseket vetett fel az emberiség "superior" helyzetéről és az ökológiai korlátok áthágásáról. Diszlexiás Harcihajó szerint ez már tiszta Mátrix.

👵 Kapuzárási pánik és nosztalgia
A beszélgetés hamar átment kollektív öregedésbe. Kiderült, hogy Csáki és cherry már 8 éve ismerik egymást, amibe mindketten beleborzadtak. Szóba került a dráguló országbérlet és a RAM-árak, miközben mindenki "nyuggernek" érezte magát (még a 21 évesek is).

🔍 A nagy képvadászat
Csáki egy fél estét töltött azzal, hogy megtaláljon egy specifikus mém-alapot a Csernobil sorozatból (Legaszov professzor a zsebébe nyúl). Végül egy barátja segítségével sikerült előkeríteni a képet.

🔞 Elszabadult emlékek (Pajzán-zárka)
A csapat átvonult a korhatáros szobába, ahol előkerültek a régi telefonokon őrzött kínos emlékek:

Régi iskolai rajzok (femboy nyuszik a táblán).

Ezeréves fotók cherry-ről, amiket ő legszívesebben törölne.

Nosztalgia "Dailykontra" és a régi ismerősök (Kuci) irányába.

❤️ Üzenet neked
Csáki és a csapat épp egy napi összefoglalót terveztek neked írni, hogy kedves legyen a visszatérésed, mert szerintük megérdemled ("queen deserves everything"). Végül észrevették, hogy felkeltél, így a nagy tervet leleplezték.`,
            wisecracks: [],
        },
    };

    const selectedDayContent = $derived(
        Object.entries(daysContent)[selectedDay - startingDay]?.[1] || {},
    );
</script>

<header>
    <h2>Napi összefoglalók a Magyar Sky Közösség Dc szerverről</h2>
</header>
<main>
    <div class="days">
        {#each days as day}
            <button onclick={() => (selectedDay = day)}>Január {day}.</button>
        {/each}
    </div>
    <hr />
    {#if selectedDayContent.geminiSummary}
        <h3>
            <img
                style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px;"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Google_Gemini_icon_2025.svg"
                alt=""
            />
            Gemini összefoglalója
        </h3>
        <p class="gemini-summary">{selectedDayContent.geminiSummary}</p>
    {/if}
    {#if selectedDayContent.wisecracks && selectedDayContent.wisecracks.length > 0}
        <h3>Aranyköpések és kiemelt üzenetek</h3>
        <ul>
            {#each selectedDayContent.wisecracks as wisecrack}
                <li>{wisecrack}</li>
            {/each}
        </ul>
    {/if}
</main>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(body) {
        background-color: #1a1a1e;
        color: #f0f0f0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    header {
        display: flex;
        flex-direction: row;
        padding: 16px;
        background-color: #121214;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
    }

    button {
        background-color: #5865f2;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 8px 12px;
        cursor: pointer;
        font-size: 1rem;
    }

    hr {
        border: none;
        border-top: 1px solid #333;
    }

    .days {
        display: flex;
        flex-wrap: nowrap;
        gap: 8px;
        padding: 16px;
        overflow-x: auto;
    }

    .gemini-summary {
        background-color: #1c1c20;
        padding: 8px;
        border: #343439 1px solid;
        border-radius: 4px;
        white-space: pre-wrap;
    }
</style>
