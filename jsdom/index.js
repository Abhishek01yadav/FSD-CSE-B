const image=document.createElement("img");
image.src="https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png";
image.width="150";
image.height="150";
const h4=document.createElement("h4");
h4.innerText="price:125/-";
const child=document.createElement("div");
child.appendChild(image)
child.appendChild(h4);
const parent=document.getElementById("root");
parent.appendChild(child)