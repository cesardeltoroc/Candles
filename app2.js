let userAnswer= prompt ('Would you like to see the holiday Collection?');
let picURL = "https://www.thespruce.com/thmb/i7gVk8iX_sGjkscmSTXeK0x738E=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-whole-coffee-beans-and-ground-coffee-151811289-59b4ba0bd963ac0011daa7f8.jpg"

if (anotherPicture.toLowerCase() == "yes"){
    //img src="https://www.thespruce.com/thmb/i7gVk8iX_sGjkscmSTXeK0x738E=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-whole-coffee-beans-and-ground-coffee-151811289-59b4ba0bd963ac0011daa7f8.jpg"
    document.write('<img src="' + picURL + '")
}