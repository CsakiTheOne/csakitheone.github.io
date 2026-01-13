<script>
    const startingDay = 12;
    const today = new Date();
    const days = new Array(today.getDate() - startingDay + 1)
        .fill(0)
        .map((_, i) => i + startingDay);

    let selectedDay = $state(today.getDate());

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
        day13: {
            geminiSummary: `📅 Találkozó szervezés (#csevegő) A nap legfontosabb eseménye, hogy cherry, az átkozott és ismeretlen vok lefixáltak egy találkozót holnapra (szerda).

Cél: 'ismeretlen vok'-nak gyakorolnia kell a fotózást egy közelgő munka miatt, Cherry lesz a modell.

Időpont: Holnap 10:00.

Helyszín: A Derék réti buszmegállóban találkoznak, onnan mennek Malomvölgybe vagy a városba.

Ismertetőjel: 'ismeretlen vok' bézs szövetkabátban lesz.

🎮 Játékok és Tech (#csevegő, #sky-szobák)

Fallout: Andris ledarálta az első évadot renderelés közben, Csáki még nem kezdte el a másodikat.

Sky: Children of the Light:

Csáki talált egy mod loadert (ThatSkyLoader), de óvatos a használatával a fiókja védelme miatt.

Andris bevallotta, hogy régen "szétcsalta" a játékot (tűzijáték a fenékből).

Fordítás: Csáki hosszú idő után frissítette a Sky magyar fordítását Claude AI (Sonnet 4.5) segítségével.

Új szezon: Kijött a Season of Lightmending trailere.

Tech help: 'ismeretlen vok' zajszűrési problémával küzdött Audacity-ben egy cicafüles fejhallgatóval. Csáki és Andris próbáltak segíteni neki voice chaten.

Webfejlesztés: Csáki összedobott egy egyszerű portfólió oldalt GitHub Pages-en (#egyéb-művészetek).

💅 Személyes és Egyéb (#csevegő, #pajzán-zárka)

Vizsga és körmök: Cherry túlélte a vizsgaidőszakot éjszakázással. Büszkélkedett a saját (nem mű) körmeivel, amiket augusztus óta nem rágott le.

Kaja: Andris egy gyanúsan zöld (spenótos/csalános?) pizzát evett.

AI Generálás: A #pajzán-zárkában ment a kísérletezés ingyenes AI képgenerátorokkal. Csáki eredményei felemásak lettek (három kéz, fura testrészek).

Média: Szóba került a Jujutsu Kaisen 3. évada és a Wednesday sorozat is.

🎨 Kreatív sarok

#rajzok: 'ismeretlen vok' beküldött két készülő alkotást.

#fényképek: Pepe a Sky instabil szervereiről (kidobálások) osztott meg képet.`,
            wisecracks: [
                `A nap vitathatatlan aranyköpése Andris a Sky modolás rejtelmeiről:

"ja meg a seggembol lovoldoztem tuzijatekot" (Cherry reakciója mindent elmondott: "i want that power")`,
                `🇬🇧🇭🇺 A Hunglish nyelvújítási különdíj ismeretlen vok, amikor Cherry körmeit dicsérte:

"LET ME DIJÁZN IT"`,
                `🤖 AI szörnyülködés Csáki próbálkozásai az ingyenes képalkotóval a #pajzán-zárkában:

"Cicit mutatja a generált karakternek, de sajnos a 3 darab kezét is"`,
                `💅 Életbölcsesség / Life Hack Cherry magyarázata arra, miért festi ki a körmét vizsgaidőszakban:

"ne az ujjam kaparjam a vizsgafeszkó miatt, hanem a lakkot... life hack"`,
            ],
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
            <button
                onclick={() => (selectedDay = day)}
                class:unselected={selectedDay !== day}
            >
                Január {day}.
            </button>
        {/each}
    </div>
    <hr />
    {#if selectedDayContent.geminiSummary}
        <h2>
            <img
                style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px;"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Google_Gemini_icon_2025.svg"
                alt=""
            />
            Gemini összefoglalója
        </h2>
        <p class="gemini-summary">{selectedDayContent.geminiSummary}</p>
    {/if}
    {#if selectedDayContent.wisecracks && selectedDayContent.wisecracks.length > 0}
        <h2>Aranyköpések és kiemelt üzenetek</h2>
        {#each selectedDayContent.wisecracks as wisecrack}
            <p class="gemini-summary">{wisecrack}</p>
        {/each}
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
        color: #ccc;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        color: white;
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

    button.unselected {
        background-color: #2f3136;
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
