async function fetchCatData() {
    try {
        // Fetch random cat fact
        const factResponse = await fetch('https://catfact.ninja/fact');
        const factData = await factResponse.json();
        document.getElementById('cat-fact').textContent = factData.fact;

        // Fetch random cat image
        const imageResponse = await fetch('https://api.thecatapi.com/v1/images/search');
        const imageData = await imageResponse.json();
        const catImage = document.getElementById('cat-image');
        catImage.src = imageData[0].url;
        catImage.style.display = 'block';
    } catch (error) {
        console.error("Error fetching cat data:", error);
    }
}