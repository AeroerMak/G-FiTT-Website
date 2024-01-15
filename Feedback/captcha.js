	var chars = "0123456789ABCDEFGHJKLMNOPQRSTUVWXTZabcdefghikmnopqrstuvwxyz";
	var string_length = 4;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.write(randomstring);




//Validate this shit when press submit button
function validate(AntiSpam)
{
 if (AntiSpam==randomstring)
  form1.action='test/feedback.php';
 else 
 {
  alert('Enter Verify Code');
 }
}
function load(url)
{
 location.href=url;
}


//Generate random background behind this random number to confuse user
 var imgCount = 3;
        var dir = 'feedback/';
        var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
        var images = new Array
                images[1] = "captcha1.jpg",
                images[2] = "captcha2.jpg",
                images[3] = "captcha3.jpg",
        document.getElementById("captcha").style.backgroundImage = "url(" + dir + images[randomCount] + ")"; 