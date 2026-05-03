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

    // If attendance is less than required
    if (percent < required) {

        let needed = 0;

        // find how many classes needed
        while (((attended + needed) / (total + needed)) * 100 < required) {
            needed++;
        }

        resultText += "You need to attend " + needed + " more classes to reach " + required + "%";

    } else {

        let bunk = 0;

        // find how many classes can be bunked
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