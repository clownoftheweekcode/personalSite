let mainEl = document.getElementById("main");
let homeBtn = document.getElementById("home"), projectsBtn = document.getElementById("projects"), artworkBtn = document.getElementById("artwork"), favoritesBtn = document.getElementById("favorites"), otherBtn = document.getElementById("other");
let allNavBtn = document.querySelectorAll("navBtn");

homeBtn.addEventListener("click", function() {
    mainEl.innerHTML = `<span class = "header">
                        <h4 id = "aboutHeader">ABOUT</h4>
                    </span>
                    <p id = "aboutCont">
                        Hello! im 17 and I am going into my senior year of highschool soon. <br> 
                        I enjoy making things and coding, although im not very great at it. <br>
                        i love cats and reptiles with my favorite reptile being a komodo dragon! <br>
                        I enjoy reading manga, watching anime from time to time, listening to music, and drawing.<br>
                        I usually listen to Visual Kei, japanese metal, and japanese rock. <br>
                        My favorite anime's are Jojo's Bizarre Adventure and Dr Stone. <br>
                        My favorite bands are DEXCORE, ONE OK ROCK, JILUKA, guruguru eigaken, and a few others.<br>
                    </p>`;
});
projectsBtn.addEventListener("click", function() {
    mainEl.innerHTML = `<span class = "header">
                        <h4 id = "projectsHeader">PROJECTS</h4>
                    </span>
                    <p id = "projectCont">
                        <span id = "webOS">
                            <a onclick = 'window.location.href = "https://github.com/clownoftheweekcode/webOS"'>
                                <img class = "projectThumb" src = "./images/projectWebOSThumb.jpg">
                                <p>webOS</p>
                            </a>
                        </span>
                        <span id = "yahtzeeWrap">
                        <span id = "Yahtzee">
                            <a onclick = 'window.location.href = "https://github.com/clownoftheweekcode/yahtzee-game.git"'>
                                <img class = "projectThumb" src = "./images/projectYahtzeeThumb.png">
                                <p>yahtzee</p>
                            </a>
                        </span>
                        </span>
                        <span id = "macroPad"></span>
                    </p>
                    `;
});

artworkBtn.addEventListener("click", function() {
    mainEl.innerHTML = `
        <h3 class = "header">ARTWORKS</h3>
        <img width = "150px" src = "./images/catGuy (1).webp">
        <img width = "220px" src = "./images/OneOkRockContestEntry (1).webp">
    `;
});

favoritesBtn.addEventListener("click", function() {
    mainEl.innerHTML = `
    <h3 class = "header">FAVORITE THINGS</h3>
    <p>I am in many different fandoms, a few are JJBA, Hannibal, Dexter, Dr.Stone, tokyo ghoul, TGCF, and MANY more!</p>
    <p>my favorite characters in the few i listed are:</p>
    <ul>
    <li>Bruno Bucciarati</li>
    <li>Joseph Joestar</li>
    <li>Shishio Tsukasa</li>
    <li>Stanley Snyder</li>
    <li>Seidou Takizawa</li>
    <li>Hua Cheng</li>
    </ul>
    `;
});

otherBtn.addEventListener("click", function() {
    mainEl.innerHTML = `
        <p>nothing yet...</p>
    `;
});

