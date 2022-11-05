
function shop() {
    var district = document.querySelector("select").value;

    var image1 = document.getElementById("img1");
    var image2 = document.getElementById("img2");
    var image3 = document.getElementById("img3");
    var heading = document.getElementById("head1");
    var para = document.getElementById("para1");
    if (district === "choose") {
        // console.log("Found choose");
        if (document.getElementById("shops").classList.contains("none") == false) {
            document.getElementById("shops").classList.add("none");
        }
    }

    else if (district === "amritsar") {
        // console.log("Found amritsar");
        document.getElementById("shops").classList.remove("none");
        document.getElementById("shops").scrollIntoView();
        image1.setAttribute("src", "img/amritsar1.webp");
        image2.setAttribute("src", "img/amritsar2.jpg");
        image3.setAttribute("src", "img/amritsar3.webp");
        heading.innerHTML = "Mahadev Traders";
        para.innerHTML = `(+91) 7947070960<br>Near Post Office, New Pawan Nagar, Amritsar - 143001, Near Celebartion Mall, Near Post Office`;
    }


    else if (district === "bathinda") {
        // console.log("Found Bathinda");
        document.getElementById("shops").classList.remove("none");
        document.getElementById("shops").scrollIntoView();
        image1.setAttribute("src", "img/bathinda1.webp");
        image2.setAttribute("src", "img/bathinda2.jpg");
        image3.setAttribute("src", "img/bathinda3.webp");
        heading.innerHTML = "The Urban Furniture";
        para.innerHTML = `(+91) 7947267130<br>Barnala Byepass Road, Bathinda City, Bhatinda - 151001, Near Reliance Mall`;
    }

    else if (district === "firozpur") {
        // console.log("Found Faridkot");
        document.getElementById("shops").classList.remove("none");
        document.getElementById("shops").scrollIntoView();
        image1.setAttribute("src", "img/firozpur1.jpg");
        image2.setAttribute("src", "img/firozpur2.webp");
        image3.setAttribute("src", "img/firozpur3.webp");
        heading.innerHTML = "Virdi Wood Working Service";
        para.innerHTML = `(+91) 9417617876<br>Shop 109, Murki Road, Shahzadi, Ferozepur - 142052, Punjab Gramin Bank`;
    }

    else if (district === "gurdaspur") {
        // console.log("Found Faridkot");
        document.getElementById("shops").classList.remove("none");
        document.getElementById("shops").scrollIntoView();
        image1.setAttribute("src", "img/gurdaspur1.jpg");
        image2.setAttribute("src", "img/gurdaspur2.jpg");
        image3.setAttribute("src", "img/gurdaspur3.jpg");
        heading.innerHTML = "Nagi Furniture";
        para.innerHTML = `(+91) 9914149009<br>Gt Road, Dhariwal, Gurdaspur - 143519, Near Senior Sr.school`;
    }

    else if (district === "hoshiarpur") {
        // console.log("Found Faridkot");
        document.getElementById("shops").classList.remove("none");
        document.getElementById("shops").scrollIntoView();
        image1.setAttribute("src", "img/hoshiarpur1.webp");
        image2.setAttribute("src", "img/hoshiarpur2.jpg");
        image3.setAttribute("src", "img/hoshiarpur3.webp");
        heading.innerHTML = "Rattan Interio";
        para.innerHTML = `(+91) 7947274433<br>V.P.O Siprian, Teh Mukerian, Hajipur, Hoshiarpur - 144221`;
    }

    else if (district === "jalandhar") {
        // console.log("Found Faridkot");
        document.getElementById("shops").classList.remove("none");
        document.getElementById("shops").scrollIntoView();
        image1.setAttribute("src", "img/jalandhar1.webp");
        image2.setAttribute("src", "img/jalandhar2.webp");
        image3.setAttribute("src", "img/jalandhar3.webp");
        heading.innerHTML = "Jaswant Furniture & Furnishings";
        para.innerHTML = `(+91) 7947192545<br>Nirmal Prabh Tower, Hoshiarpur Road, Rama Mandi, Jalandhar - 144005, Near Hdfc Bank Building`;
    }

    else if (district === "kapurthala") {
        // console.log("Found Faridkot");
        document.getElementById("shops").classList.remove("none");
        document.getElementById("shops").scrollIntoView();
        image1.setAttribute("src", "img/kapurthala1.webp");
        image2.setAttribute("src", "img/kapurthala2.jpg");
        image3.setAttribute("src", "img/kapurthala3.jpg");
        heading.innerHTML = "Hanspal Furniture Works";
        para.innerHTML = `(+91) 9888900114<br>Sultanpur Road, Kapurthala Ho, Kapurthala - 144601, Opposite Ramnik Hotel`;
    }

    else if (district === "ludhiana") {
        // console.log("Found Faridkot");
        document.getElementById("shops").classList.remove("none");
        document.getElementById("shops").scrollIntoView();
        image1.setAttribute("src", "img/ludhiana1.webp");
        image2.setAttribute("src", "img/ludhiana2.jpg");
        image3.setAttribute("src", "img/ludhiana3.jpg");
        heading.innerHTML = "Leewood Kitchen & Furnitures";
        para.innerHTML = `(+91) 7947242108<br>Pakhowal Road, Ludhiana - 141001 (Adj. Axis Bank, Opp. South End Garden)`;
    }

    else if (district === "pathankot") {
        // console.log("Found Faridkot");
        document.getElementById("shops").classList.remove("none");
        document.getElementById("shops").scrollIntoView();
        image1.setAttribute("src", "img/pathankot1.webp");
        image2.setAttribute("src", "img/pathankot2.webp");
        image3.setAttribute("src", "img/pathankot3.webp");
        heading.innerHTML = "Hanspal Furniture Works";
        para.innerHTML = `(+91) 9888232305<br>Mission Link Road, Mission Road, Pathankot - 145001 (Near Ramlila Ground)`;
    }

    else if (district === "patiala") {
        // console.log("Found Faridkot");
        document.getElementById("shops").classList.remove("none");
        document.getElementById("shops").scrollIntoView();
        image1.setAttribute("src", "img/patiala1.jpg");
        image2.setAttribute("src", "img/patiala2.webp");
        image3.setAttribute("src", "img/patiala3.webp");
        heading.innerHTML = "Hanspal Furniture Works";
        para.innerHTML = `(+91) 7947360268<br>House Number 136F Ranjit Nagar, Seona Road, Patiala Ho, Patiala - 147001`;
    }
}