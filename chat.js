function chatbox() {
    var chatbox = document.getElementById('chatbox'); 
    var button = document.getElementById('button');
    if (chatbox.style.visibility === 'hidden') {
        chatbox.style.visibility = 'visible';
        button.value = "Zacznij od nowa"
    }
    else {
        chatbox.style.visibility = 'hidden';
        button.value = "Zacznij grę";
    }


}
function word(txt) {
    var summary =  document.getElementById('summary')
    var last_word = document.getElementById('last_word'); 
    var word = document.getElementById('txt');
    last_word.innerHTML ="Ostatnie słowo:" + txt + "<br>";
    let char = txt[txt.length-1];
    word.value = char;


}
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}