function pindah(url)
{
    console.log(url)
    window.location = url;
}

function dateFormat(inputDate, format) {
    //parse the input date
    const date = new Date(inputDate);

    //extract the parts of the date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    //replace the month
    format = format.replace("MM", month.toString().padStart(2,"0"));

    //replace the year
    if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2,2));
    }

    //replace the day
    format = format.replace("dd", day.toString().padStart(2,"0"));

    return format;
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toUpperCase() : word.toLowerCase();
    }).replace(/\s+/g, '');
}

function validateEmail()
{
    let x = document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!x.value.match(mailformat))
    {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("submitReg").disabled = true;
        document.getElementById("alertEmail").innerHTML = "Wrong Format Email";
        document.getElementById("alertEmail").style.color = "red";
        document.getElementById("alertEmail").style.fontStyle = "italic";
    }
    else
    {
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("submitReg").disabled = false;
        document.getElementById("alertEmail").innerHTML = "";

    }

}
const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}
