console.log("Js Connected Successfully");
console.log(document);
console.log(document.title);

let heading = document.getElementById("title");
console.log(heading);
heading.innerText = "DOM is Working";
heading.style.color = "blue";
heading.style.backgroundColor = "Lightgray";

let para = document.getElementById("para");
console.log("InnerText :", para.innerText);
console.log("TextContent :", para.textContent);
para.innerText = "Change inner text";
para.textContent = "Change Text conetent";

let box = document.getElementById("box");
console.log("innerHTML :", box.innerHTML);
console.log("innerText :", box.innerText);
box.innerHTML = "<h2>Inject Heading</h2><p> Content para</p>";

let img = document.getElementById("myimg");
console.log("Image in :", img.getAttribute("src"));
img.setAttribute(
  "src",
  "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg?w=385"
);
img.removeAttribute("alt");
console.log("Alt removed in the process");

let styId = document.getElementById("styleId");
styId.style.color="yellow";
styId.style.backgroundColor="green";
styId.style.padding="20px";
styId.style.fontSize="70px";
styId.style.display="none";
styId.style.display="block";