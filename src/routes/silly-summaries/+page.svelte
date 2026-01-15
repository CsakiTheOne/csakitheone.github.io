<script>
    const startingDay = 12;
    const today = new Date();
    const days = new Array(today.getDate() - startingDay + 1)
        .fill(0)
        .map((_, i) => i + startingDay);

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
        day14: {
            geminiSummary: `#csevegő szoba
A nap folyamán a társaság tagjai (ismeretlen vok, cherry, Andris, Csáki és Szkera) különböző témákat érintettek a mindennapi kalandoktól a technikai kérdésekig:

Séta a hóban: Reggel ismeretlen vok és cherry a havas utakon való közlekedés nehézségeiről beszélgettek, miközben mindketten a suli felé tartottak. Végül össze is futottak az iskola előtt.

Sorozatok és Tanulás: Andris sorozatokat ajánlott Csákinak (Love, Death & Robots, Secret Level), miközben Szkera a nagy vizsgája (diploma előtti „kipakolás”) miatt izgult, ahol ötvös/asztalos témákban ugratták egymást.

Fotózás és Modellezés: Délután ismeretlen vok megosztotta a nap folyamán készült fotókat cherryvel, aki el volt ájulva a képek minőségétől, és felajánlotta, hogy a jövőben is szívesen lesz a modellje.

Technológia és Fordítás: Csáki felvetette, hogy készít egy programot a Sky nevű játék magyarításához, de ismeretlen vok jelezte, hogy neki nincs rá szüksége. Csáki emellett egy iPhone-okat lefagyasztó hibáról is megosztott egy videót: How To Crash Any iPhone.

#pajzán-zárka szoba
Ebben a szobában jóval kaotikusabb és kötetlenebb volt a hangulat, sok belső poénnal:

Gasztro-horror: Diszlexiás Harcihajó olyan meredek ötletekkel állt elő, mint a nutellás vodka és az olívabogyótól „beálló” macskák, amit a többiek (különösen cherry) határozottan elutasítottak.

Olcsó receptek: A hangulat később konstruktívabb lett, amikor ismeretlen vok megosztotta a „ChatGPT-vel olcsósított” koreai csirke receptjét, valamint tippeket adott olcsó carbonarához és müzli-joghurt kombinációkhoz. Inspirációként egy vlogger csatornáját is bedobta: annika's leaf.

Pécs vs. Győr: Vita alakult ki a városokról; Diszlexiás Harcihajó győri, míg a többiek inkább Pécshez kötődnek. Felemlegettek régi részeg sztorikat (pl. a pécsi Downtown bárt) és győri közlekedési káoszokat.

Gondoskodás: A beszélgetés végén a tagok egymás ugratása mellett figyeltek is egymásra: Diszlexiás Harcihajó és ismeretlen vok is győzködték a görcsökkel küzdő cherryt, hogy mindenképpen egyen rendes ételt.

Összességében: Egy mozgalmas nap volt, tele vizsgadrukkal, havas sétával, közös fotózással és rengeteg kaotikus, étkezéssel kapcsolatos poénkodással.`,
            wisecracks: [
                `Andris szakmai jóslata: Amikor Szkera a nagy vizsgája miatt izgult:

"Hajrá hajrá, diplomás asztalos lesz belőled!!!" – Amire Szkera kikérte magának, hogy ő nem csak padokat csinál, mire Andris: "Asztalt meg széket is?"`,
                `Diszlexiás Harcihajó önkritikája:

"A legveszélyesebb, hogy elcsúszok és leesek az IQ-mra xddd"`,
                `Cherry és az alkohol hatásai:

"Lavór kapitánnyá változok és mindenkit meg akarok dugni sodrófával."`,
                `A "mogyorós vodka" incidens: Diszlexiás Harcihajó receptötlete, amit Cherry rövidre zárt:

"Ez visítófosásnak és sugárhányásnak hangzik, kihagyom."`,
                `Ismeretlen vok reakciója Cherry fotóira:

"Paid actor a csepegő víz. Kedvenc képem lesz."`,
                `Szkera vizsgája: Ez volt a nap legkomolyabb tétje, hiszen most dőlt el, hogy diplomázhat-e.`,
                `A nagy "találkozás": Cherry és ismeretlen vok reggeli véletlen (vagy fél-véletlen) találkozása a suli előtt a padnál, ami egy kis ijesztgetésbe és sok "hehe"-zésbe torkollott.`,
                `A fotózás sikere: Úgy tűnik, ismeretlen vok és cherry között egy gyümölcsöző "fotós-modell" együttműködés vette kezdetét, aminek cherry kifejezetten örült.`,
                `Csáki és a fejlesztés: Csáki felajánlotta a fordító modját, és bár a fogadtatás vegyes volt, kiderült, hogy ő készítette a Distant Hug nevű dolgot is, ami cherry szerint nélkülözhetetlen.`,
                `A nap "tanulsága" (pro-tipp):
Ha cupnoodle-t (zacskós tésztát) eszel, a maradék lébe üss egy tojást, és tedd be a mikróba – ismeretlen vok szerint ez a túlélés kulcsa.`,
            ],
        },
    };

    let selectedDay = $state(startingDay);
    const selectedDayContent = $derived(
        Object.entries(daysContent)[selectedDay - startingDay]?.[1] || {},
    );
</script>

<header>
    <h2>Napi összefoglalók a Magyar Sky Közösség Dc szerverről</h2>
</header>
<div class="days">
    {#each days as day}
        <button
            onclick={() => (selectedDay = day)}
            class:unselected={selectedDay !== day}
        >
            Jan {day}.
        </button>
    {/each}
</div>
<hr />
<main>
    <h2>
        <img
            style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px;"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Google_Gemini_icon_2025.svg"
            alt=""
        />
        Gemini összefoglalója
    </h2>
    {#if selectedDayContent.geminiSummary}
        <p class="gemini-summary">{selectedDayContent.geminiSummary}</p>
    {:else}
        <p>
            Még nincs összefoglaló erre a napra. Általában este 10 és éjfél
            között állítom össze.
        </p>
    {/if}
    {#if selectedDayContent.wisecracks && selectedDayContent.wisecracks.length > 0}
        <h2>Aranyköpések és kiemelt üzenetek</h2>
        {#each selectedDayContent.wisecracks as wisecrack}
            <p class="gemini-summary">{wisecrack}</p>
        {/each}
    {/if}
</main>
<footer>
    <p>Made by Csáki w/ ❤️</p>
</footer>

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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
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

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        background-color: #121214;
        color: #666;
    }

    button {
        background-color: #5865f2;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 8px 12px;
        cursor: pointer;
        font-size: 1rem;
        white-space: nowrap;
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
