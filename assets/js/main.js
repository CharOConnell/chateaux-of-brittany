var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState ==4 && this.status ==200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48%2C-3&radius=50000&keyword=chateau&key=AIzaSyAyrCzti1IFJ1Q2TcZnMqha4OmdS5nyZkE");
xhr.send();