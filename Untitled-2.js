const image = {
	"C:\Users\ZhuanZ\Desktop\二手车网页\911.jpg",
	"/C:/Users/ZhuanZ/Desktop/二手车网页/boxster.jpg"
};
let first = 0;
const bgcon =document.getElementById("shouye");
function change(){bgcon.style.backgroundImage=`url(${images[first]})`;
				 first=(first+1)%image.length;}
setInterval(change,5000);
change();

	// JavaScript Document