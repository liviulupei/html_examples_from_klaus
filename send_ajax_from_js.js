xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      the_response = this.responseText;
    }
};
xhttp.open("GET", your_url_with_parameters , true);
xhttp.send();
