
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        let json = JSON.parse(xhttp.responseText);
        document.getElementById('quote').textContent = json.value;
    }
}
xhttp.open('GET', 'https://api.chucknorris.io/jokes/random?category=dev', true);
xhttp.send();