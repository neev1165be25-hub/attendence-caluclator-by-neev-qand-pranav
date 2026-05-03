function calculate() {

    let total = parseInt(document.getElementById("total").value);
    let attended = parseInt(document.getElementById("attended").value);
    let required = parseInt(document.getElementById("required").value);

    if (total <= 0 || attended < 0 || required <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid values";
        return;
    }

    let percent = (attended / total) * 100;
    let resultText = "Your Attendance: " + percent.toFixed(2) + "%<br>";
 
    if (percent < required) {

        let needed = 0;

       
        while (((attended + needed) / (total + needed)) * 100 < required) {
            needed++;
        }

        resultText += "You need to attend " + needed + " more classes to reach " + required + "%";

    } else {

        let bunk = 0;

         
        while (((attended) / (total + bunk)) * 100 >= required) {
            bunk++;
        }

        bunk = bunk - 1;

        resultText += "You can bunk " + bunk + " classes and still maintain " + required + "%";

    }

    document.getElementById("result").innerHTML = resultText;
}

function toggleAbout(id) {
    const box = document.getElementById(id);
    box.classList.toggle("active");
}