getNames();

function getNames() {
    $.get("https://random-word-api.herokuapp.com//word?key=HQ70QA9M&number=2", function(res) {
        $(".artist-name").text(res[0]);
        $(".album-title").text(res[1]);
    })
}