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
        day15: {
            geminiSummary: `#csevegő szoba
A nap fő témája az extrémebb kollégiumi gasztronómia volt.

Kaja-tippek: Csáki megosztotta a "Silly Summaries" 3. részét, amihez Andris hozzáfűzte, hogy a zacskós tészta életmentő. cherry, az átkozott és Diszlexiás Harcihajó kolis tippeket adtak: melegszendvics-sütőben szinte bármi elkészíthető (rántott sajt, nuggets, tükörtojás), sőt, a fagyasztott pizzát félbehajtva is abban a legjobb sütni.

Gaming és Scammelés: Andris egész nap próbálta Szkodrát elérni egy közös játékra. Szkera többször is "bealudta" vagy elfelejtette a megbeszélt időpontot, ami miatt Andris úgy érezte, "be lett scammelve". Végül délután sikerült összehozniuk a hívást.

Fejlesztés: Csáki belekezdett egy fordításkezelő programba WinUI 3 technológiával, hogy a Windows alkalmazásai végre modernebbül (lekerekített gombokkal és akril hatással) nézzenek ki.

#más-játékok
Silly avatar láz: cherry örömmel újságolta, hogy megszerezte a "Light Fury"-t, ami szerinte egy igazi királynő.

Technikai újítás: Csáki mutatott egy új setupot, amivel egyszerre használ kontrollert és egeret (Switch Joycon és egér kombináció), ami Andris szerint is nagyon menő, de még tanulnia kell az irányítást.

Évforduló: Csáki megosztotta a Sonic 35. évfordulós előzetesét, megjegyezve, hogy mindenki milyen öreg már.

#pajzán-zárka
Ebben a szobában főleg vizuális poénok és furcsaságok mentek. ismeretlen vok értetlenkedett valamin, amit látott, Pepe pedig megjegyezte, hogy valaki rajzolt nekik egy "rakétát", amit mások inkább kutyacsontnak néztek. Szóba került a drága Sissy kakaó és tej ára is.

#memek-hihi
Videók: Megosztották a klasszikus "székely meg a fia" videót, egy Apex Legends meme trailert, és egy videót Bíró Adáról (az AI műsorvezetőről).

Politika és társadalom: Pepe Instagram-reelteket küldött (többek között a Békemenetről), amiből komolyabb beszélgetés alakult ki az ország állapotáról, az egészségügyről és az oktatásról. cherry kifejtette, hogy mennyire bosszantják a Facebookon a valóságtól elrugaszkodott kommentek.

#rajzok és #egyéb-művészetek
Animáció: ismeretlen vok mutatott egy alakuló animációt egy felkelő/nyújtózó karakterről. Bár a takaró félúton eltűnt, a "Godzilla-pózra" büszke.

Foodporn: ismeretlen vok lőtt egy képet egy gigantikus (ehetetlennek tűnő) ételről, Pepe pedig kontrázott a saját sült krumplis menüjükkel.

Érdekesség a videókból:

Az egyik link egy M2 Petőfi TV riportra mutat, ahol Bíró Ada (az MI műsorvezető) adott vacsorát.

Csáki megosztott egy Sonic the Hedgehog 35. évfordulós videót is.`,
            wisecracks: [
                `Andris a gasztronómiáról: „Hurka kolbász almapaprika legjobb kaja” – Rövid, tömör hitvallás a magyar konyha mellett.`,
                `ismeretlen vok az önkritikáról (rajz kapcsán): „A takaró meg félúton eltünt XD” – Az animációs munka nehézségei egy mondatban.`,
                `Andris Szkera "eltűnése" után: „@Szkera belettem scammelve ugyerzem” – Amikor a közös játék ígérete köddé válik.`,
                `A kolis gourmet megoldás: Diszlexiás Harcihajó receptje a fagyasztott pizzára: félbe kell hajtani és beleerőltetni a melegszendvics-sütőbe. „10/10 bármikor.”`,
                `A "rakéta": Pepe megjegyzése a #pajzán-zárka szobában, miszerint egy 32 éves ismerőse rajzolt nekik egy rakétát, amit mindenki másnak sikerült félreértenie.`,
                `Bíró Ada és a vacsora: Csáki rátalált egy videóra, ahol a magyar mesterséges intelligencia-műsorvezető „vacsorát adott”, ami egyszerre tech-érdekesség és kicsit szürreális téma a csoportban.`,
                `Külön említést érdemel: Diszlexiás Harcihajó "békás" üzenete Szkera számára, amit csak azért küldött, mert szerinte a békák jó fejek, vagy ha nem is, legalább zöldek.`,
            ],
        },
        day16: {
            geminiSummary: `#csevegő
Összefoglalók: Csáki megosztotta a "silly-summaries" weboldalát, aminek Andris nagyon örült. Csáki jelezte, hogy a 16-ai összefoglalóval még adós, de fáradt.

Tudomány és Színek: cherry egy Instagram videó kapcsán mesélt arról, hogy a nők anatómiai és evolúciós okokból (tetrakromácia) jobban érzékelik a színeket.

Gasztronómia: Diszlexiás Harcihajó (Ákos) villantott egy hatalmas adag bolognait, ami szerinte 2-3 napig elég lesz nekik. Bár szerénykedett a főzőtudományával, cherry biztosította róla, hogy a főztje "piszok jó".

Színlátás teszt: Ákos büszkélkedett, hogy sikerült egy színlátás tesztje, amin cherry meglepődött, mert néha "színvaknak" tűnik.

#pajzán-zárka
Drip és humor: Diszlexiás Harcihajó egy bizarr ruházati kiegészítőt ("new drip") osztott meg, ami kiverte a biztosítékot.

Gaming és technika: Csáki kiégett a Windows miatt, és bár Andris hívta Apexezni, Csáki nem tudott menni, mert egy külföldi barátjával már hónapok óta lefixálták a közös játékot.

Half-Life nosztalgia: Csáki megnézett egy SFM videót Dr. Breenről, ami után kedvet kapott a Half-Life 2-höz.

Kína: ismeretlen vok talált egy helyet Kínában, ahová azonnal el akart menni, és már a nyelvtanulást is fontolgatja.

#memek-hihi
Nosztalgia: Előkerült a klasszikus "Lemme Smash" mém.

ADHD Limbo: Diszlexiás Harcihajó egy találó videót küldött az ADHD-s reggeli kómáról.

Modding: Csáki elmélyült a Half-Life 2 modolásban (49 modot rakott be), és hívta Ákost, hogy nézze meg az eredményt. Felmerült egy-két pikánsabb mod létezése is Alyx szobája kapcsán.

Kollégiumi emlékek: cherry megosztott egy képet egy "rohasztott" banánról a kollégiumi éveiből.

AI és Tech: Csáki egy AI Waifu építős videót is elmentett a listájára.

#rajzok
Szenvedés az axonometriával: ismeretlen vok megbánta, hogy anno nem figyelt rajzórán, most viszont szüksége lenne rá. Később megmutatott egy készülő "clean sketchet" is.

Anatómiai furcsaságok: cherry és ismeretlen vok a fura pózokról és a hajlékonyságról beszélgettek. cherry megmutatta, hogy a táncos múltja miatt még mindig képes "disturbing" pózokra hajtogatni magát.

Videóvágás: ismeretlen vok elkészült egy videó bevezetőjével, amihez a nyújtózás hangeffektet ő maga imitálta a mikrofonba.

#állat-simogató & #egyéb-művészetek
Kiskedvencek: ismeretlen vok mutatott képeket a Sparrow nevű kutyusáról és Bettikéről, akikért Pepe is odavolt.

Programozás: Csáki büszkélkedett egy WinUI projekttel, amivel a Sky fordításait lehet könnyen kezelni; örült, hogy végre nem "Windows 7 kinézetű szutykot" sikerült alkotnia.

Konyhatündér tervek: ismeretlen vok és cherry receptekkel és "kajcsi ötletekkel" zárták a sort, bár abban egyetértettek, hogy a megvalósításig ritkán jutnak el.`,
            wisecracks: [
                `A "nyújtózás" hangeffekt: Kifejezetten kreatív (és vicces) részlet, hogy ismeretlen vok saját maga vette fel a mikrofonba a nyújtózkodás hangját a videójához, ahelyett, hogy keresett volna egyet.`,
                `A Half-Life 2 modding-rejtély: Diszlexiás Harcihajó nosztalgikus története arról, hogy az apja által "kukázott" verzióban miért volt egy műbroki Alyx szobájában, és hogy ő ezt akkoriban a játék részének hitte-e vagy sem.`,
            ],
        },
        day17: {
            geminiSummary: `Íme egy összefoglaló a Discord csatornák legutóbbi beszélgetéseiből:

### **#csevegő (Általános csevegés)**

* **Sínén Vagyunk app:** Andris az iOS verzió után érdeklődött, de Csáki jelezte, hogy nem fejleszt iOS-re. Szóba került a projekt monetizálása is, de Csáki hangsúlyozta, hogy ezeket hobbiként kezeli, és nem akar politikai (pl. Tisza párt) vagy jogi kockázatot vállalni (utalva az e-Szivacs készítőjének esetére).
* **Egyetemi élet és vizsgák:** * **Andris** megkapta az új órarendjét, ahol a "Könyvelés 2" dominál.
* **cherry, az átkozott** (biológushallgató) komoly kiégéssel küzd a vizsgaidőszak végén, és a tárgyfelvétel miatt stresszel (kevés a kreditje, kötválokat kell választania). Segítséget kért a tárgyak kiválasztásában, végül a *funkcionális szövettan* és a *mikrotechnika* tűnik befutónak.
* **Diszlexiás Harcihajó** (gépészmérnök) az Audi-karral és a nehéz hőtan vizsgájával kapcsolatos tapasztalatait osztotta meg.


* **Szerver-találkozó:** Felmerült egy pécsi iszogatás ötlete. **ismeretlen vok** pénzügyi okok miatt lemondta volna, de Csáki és a többiek felajánlották, hogy kisegítik, mert a társaság a fontos. A szállást cherry ajánlotta fel.
* **Egyéb:** Szóba került a teke (cherry öccsei sikeresen versenyeznek), és a fiúk megosztották egymással a PC/Laptop specifikációikat (Csáki workstation-je vs. Ákos Lenovo LOQ laptopja).

### **#pajzán-zárka**

* **Algoritmusok:** A csapat az Instagram és TikTok algoritmusairól beszélgetett, amik náluk leginkább edzős videókkal, "booktok" tartalmakkal vagy éppen lengébben öltözött hölgyekkel vannak tele.
* **Biológiai érdekességek:** cherry egy NotebookLM podcast kapcsán hozott érdekességeket a lábasfejűekről, majd a beszélgetés elkalandozott a kacslabelű rákok extrém testarányú nemi szervéig, amit az evolúció egyik furcsaságaként emlegettek.
* **Iskolai emlékek:** Egy korábbi osztálytárs (vagy iskolatárs) higiéniai hiányosságairól és cherry traumatikus öltözői emlékeiről nosztalgiáztak.

### **#rajzok és #egyéb-művészetek**

* **Plüss projekt:** Csáki egy izgalmas projekten dolgozik: **NFC-s plüssökön**, amikhez egy webes alkalmazás is tartozik.
* cherry axolotl rajzát Csáki vektorizálta (SVG), így az appban a felhasználók dinamikusan színezhetik a plüssüket a fonalaknak megfelelően.
* A cél egyfajta "nyitottabb Amiibo" koncepció, ahol a plüssökhöz egy digitális "kert" és minijátékok is tartoznának. A közösségnek nagyon tetszik az ötlet, többen jelezték, hogy vásárolnának is belőle.


* **Art Collab:** ismeretlen vok javasolt egy közös rajzolást, ahol mindenki a saját karakterét (OC) rajzolja meg egy adott színnel.

### **#memek-hihi és #állat-simogató**

* **Hivatalok:** cherry az egyetemi lakhatási támogatás lassú és elutasító ügyintézésén dühöngött.
* **Állatok:** cherry mutatott egy képet a macskájáról, aki éppen vele "tanul", de kiderült, hogy a cica büdös, mert megevett egy poloskát.
* **Zene/Kultúra:** Csáki Hatsune Miku vendégszerepléseiről hozott videót, Andris pedig a Threads és Twitter (X) felhasználók közötti különbségeken élcelődött.`,
            wisecracks: [
                `Andris a MÁV-ról: „A pokol az walk in the park lesz hozzá képest.” (A Mecsek IC-n töltött 5 év ingázás után.)`,
                `Andris a tanulást segítő szerekről: „Spanyol orvostan hallgató ismerősöm mesélte, hogy vannak szaktársai, akik metheznek, hogy bírják a napokig nem alvást... én 100% tiszta szorongáson és az egyedül alvástól való félelmen futok.”`,
                `Diszlexiás Harcihajó az egyetemi eszközökről: „University issued vibrator and anal beads. For study purposes of course.” (Egy alternatív szexuális felvilágosító kurzus ötlete kapcsán.)`,
                `cherry, az átkozott az evolúcióról: „Az ember az én szememben mostantól egy evolúciós csőd. Telibe leszarom hogy van hüvelykujjunk, amikor a faszik nem tudnak ilyet, mint ezek a [kacslábú] rákok.”`,
                `A közösség ereje: Amikor ismeretlen vok azt mondta, nincs pénze elmenni a találkozóra, a többiek azonnal lehurrogták: „Elnézést, az nem opció, hogy pénzügyi problémák miatt nem jössz... összedobjuk a money-t.” Ez egy nagyon baráti gesztus volt a csapattól.`,
                `A nap "legfurcsább" híre:
A tény, hogy cherry macskája megevett egy poloskát, és emiatt büdös szájjal próbált vele együtt tanulni.`,
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
