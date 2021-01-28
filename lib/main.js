

function menu()
{	
	var amount = document.getElementById('amount').value;
	amount = parseInt(amount);

	var form = document.getElementById("test");
	var genR = form.elements["genR"].value;


	if (genR === "0")
	{
		addParaOrList(1,amount);
	}
	else if (genR === "1")
	{	
		addParaOrList(amount);
	}
	else if (genR === "2")
	{	
		addParaOrList(amount,1,"Li");
	}
	else
	{	
		Alert("Invalid Choice");
	}
}

function addParaOrList(amount,generateChoice=100,element="P")
{
	var mainText= document.getElementById('mainText');
	var para,pNode;

	while (mainText.firstChild) {
	    mainText.removeChild(mainText.firstChild);
	}

	for(var i=0;i<amount;i++)
	{
		para = generateText(generateChoice);
		pNode = addElementNode(para,element);
		mainText.appendChild(pNode);
	}
}

function addElementNode(para,element)
{
	var pNode = document.createElement(element);
	var textnode = document.createTextNode(para);  
	pNode.appendChild(textnode);

	return pNode;
}

function generateText(amount)
{
	var para="";
	var index=0;

	for(var i=0;i<amount;i++)
	{
		index = Math.round(Math.random()*posWord.length);
		para+=" "+posWord[index][1];
	}

	if(amount == 1)
	{
		return para
	}
	else
	{
		return para+"।"
	}
	
}

// add text to input field
function entry_to_field(generateChoice=100){

	var para = "";

	for(var i=0;i<amount;i++)
	{
		para += "\n" + generateText(generateChoice);
	}

	// var para = generateText(generateChoice);
	var field = document.getElementById("cpToClip");
	field.value = para;
}

// copy_text_to_clipboard one way, no html input element is needed
function copy_to_clip() {

	/* Get the text field */
	var copyText = document.createElement("INPUT");
	var genText = document.getElementById("mainText").innerText;
	copyText.setAttribute("value", genText);

	/* Select the text field */
	copyText.select();
	/* For mobile devices */
	copyText.setSelectionRange(0, 99999); 

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);
}

// copy_text_to_clipboard - another with input element in html
function copy_to_clip_two() {

	/* Get the text field */
	var copyText = document.getElementById("cpToClip");

	/* Select the text field */
	copyText.select();
	/* For mobile devices */
	copyText.setSelectionRange(0, 99999); 

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);
}