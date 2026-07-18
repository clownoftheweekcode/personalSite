let mainEl = document.getElementById("main");
let homeBtn = document.getElementById("home"), projectsBtn = document.getElementById("projects"), artworkBtn = document.getElementById("artwork"), favoritesBtn = document.getElementById("favorites"), otherBtn = document.getElementById("other");
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
                        <span id = "Yahtzee"></span>
                        <span id = "macroPad"></span>
                    </p>
                    `;
});

artworkBtn.addEventListener("click", function() {
    mainEl.innerHTML = ``;
});

favoritesBtn.addEventListener("click", function() {
    mainEl.innerHTML = ``;
});

otherBtn.addEventListener("click", function() {
    mainEl.innerHTML = ``;
});

