<script lang="ts">
    import csvData from "$lib/debi/tanulókártyák.csv?raw";
    
    // Parse CSV data
    let cards: { question: string; answer: string }[] = $state([]);
    let currentCardIndex = $state(0);
    let showAnswer = $state(false);
    let score = $state(0);
    let answeredCards = $state(0);

    // Parse CSV on component initialization
    $effect(() => {
        const lines = csvData.trim().split('\n');
        cards = lines.map(line => {
            const [question, answer] = line.split(',').map(part => part.trim());
            return { question, answer };
        });
    });

    const currentCard = $derived(cards[currentCardIndex] || { question: '', answer: '' });
    const progress = $derived(cards.length > 0 ? Math.round((currentCardIndex / cards.length) * 100) : 0);

    function showAnswerHandler() {
        showAnswer = true;
    }

    function nextCard() {
        if (currentCardIndex < cards.length - 1) {
            currentCardIndex++;
            showAnswer = false;
        }
    }

    function previousCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            showAnswer = false;
        }
    }

    function markCorrect() {
        if (!showAnswer) return;
        score++;
        answeredCards++;
        nextCard();
    }

    function markIncorrect() {
        if (!showAnswer) return;
        answeredCards++;
        nextCard();
    }

    function resetGame() {
        currentCardIndex = 0;
        showAnswer = false;
        score = 0;
        answeredCards = 0;
    }

    function shuffleCards() {
        cards = [...cards].sort(() => Math.random() - 0.5);
        resetGame();
    }
</script>

<main>
    <div class="header">
        <h1>Közgazdaságtan tanuló kártyák</h1>
        <div class="stats">
            <div class="progress-bar">
                <div class="progress-fill" style="width: {progress}%"></div>
            </div>
            <p>{currentCardIndex + 1} / {cards.length}</p>
            <p>Pontszám: {score} / {answeredCards}</p>
        </div>
    </div>

    {#if cards.length > 0}
        <div class="card-container">
            <div class="card" class:flipped={showAnswer}>
                <div class="card-front">
                    <h2>Kérdés</h2>
                    <p class="question">{currentCard.question}</p>
                    <button class="show-answer-btn" onclick={showAnswerHandler}>
                        Válasz megmutatása
                    </button>
                </div>
                
                <div class="card-back">
                    <h2>Válasz</h2>
                    <p class="answer">{currentCard.answer}</p>
                    <div class="answer-buttons">
                        <button class="correct-btn" onclick={markCorrect}>
                            ✓ Tudtam
                        </button>
                        <button class="incorrect-btn" onclick={markIncorrect}>
                            ✗ Nem tudtam
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="controls">
            <button class="nav-btn" onclick={previousCard} disabled={currentCardIndex === 0}>
                ← Előző
            </button>
            
            <div class="control-buttons">
                <button class="control-btn" onclick={resetGame}>Újrakezdés</button>
                <button class="control-btn" onclick={shuffleCards}>Keverés</button>
            </div>
            
            <button class="nav-btn" onclick={nextCard} disabled={currentCardIndex === cards.length - 1}>
                Következő →
            </button>
        </div>
    {:else}
        <div class="loading">
            <p>Kártyák betöltése...</p>
        </div>
    {/if}
</main>

<style>
    :global(*) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :global(body) {
        background-color: #d6c5c7;
        color: #000;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        min-height: 100vh;
    }

    .header {
        text-align: center;
        margin-bottom: 30px;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: #2c1810;
    }

    .stats {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }

    .progress-bar {
        width: 200px;
        height: 8px;
        background-color: #a89090;
        border-radius: 4px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background-color: #4a6741;
        transition: width 0.3s ease;
    }

    .stats p {
        font-weight: bold;
        font-size: 1.1rem;
        color: #2c1810;
    }

    .card-container {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        perspective: 1000px;
    }

    .card {
        width: 100%;
        max-width: 600px;
        height: 400px;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.6s;
        cursor: pointer;
    }

    .card.flipped {
        transform: rotateY(180deg);
    }

    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .card-front {
        background: linear-gradient(135deg, #f5f1f2, #e8dfe0);
        border: 2px solid #c4a8ab;
    }

    .card-back {
        background: linear-gradient(135deg, #e8f4e8, #d4e8d4);
        border: 2px solid #9db89d;
        transform: rotateY(180deg);
    }

    .card-front h2 {
        color: #2c1810;
        margin-bottom: 20px;
        font-size: 1.8rem;
    }

    .card-back h2 {
        color: #1a3a1a;
        margin-bottom: 20px;
        font-size: 1.8rem;
    }

    .question, .answer {
        font-size: 1.3rem;
        line-height: 1.6;
        margin-bottom: 30px;
        flex-grow: 1;
        display: flex;
        align-items: center;
        max-height: 250px;
        overflow-y: auto;
    }

    .question {
        color: #2c1810;
    }

    .answer {
        color: #1a3a1a;
        font-weight: 500;
    }

    .show-answer-btn {
        background-color: #8b7a7c;
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 8px;
        font-size: 1.1rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .show-answer-btn:hover {
        background-color: #766568;
    }

    .answer-buttons {
        display: flex;
        gap: 20px;
    }

    .correct-btn, .incorrect-btn {
        padding: 12px 25px;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s;
        font-weight: bold;
    }

    .correct-btn {
        background-color: #4a6741;
        color: white;
    }

    .correct-btn:hover {
        background-color: #3e5537;
        transform: translateY(-2px);
    }

    .incorrect-btn {
        background-color: #b85450;
        color: white;
    }

    .incorrect-btn:hover {
        background-color: #a04844;
        transform: translateY(-2px);
    }

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .control-buttons {
        display: flex;
        gap: 15px;
    }

    .nav-btn, .control-btn {
        padding: 10px 20px;
        border: 2px solid #8b7a7c;
        background-color: #f5f1f2;
        color: #2c1810;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s;
        font-weight: 500;
    }

    .nav-btn:hover, .control-btn:hover {
        background-color: #8b7a7c;
        color: white;
        transform: translateY(-1px);
    }

    .nav-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }

    .nav-btn:disabled:hover {
        background-color: #f5f1f2;
        color: #2c1810;
    }

    .loading {
        text-align: center;
        padding: 60px 20px;
    }

    .loading p {
        font-size: 1.3rem;
        color: #2c1810;
    }

    @media (max-width: 600px) {
        .card {
            height: 350px;
        }
        
        .card-front, .card-back {
            padding: 20px;
        }
        
        .question, .answer {
            font-size: 1.1rem;
        }
        
        .controls {
            justify-content: center;
        }
        
        .stats {
            flex-direction: column;
            gap: 10px;
        }
        
        .progress-bar {
            width: 150px;
        }
    }
</style>
