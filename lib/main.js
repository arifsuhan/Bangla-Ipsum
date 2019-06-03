



function menu()
{	
	var amount = document.getElementById('amount').value;
	amount = parseInt(amount);

	var form = document.getElementById("test");
	var genR = form.elements["genR"].value;

	if (genR === "0")
	{
		addParaOrList(1);
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
	var para,pNode,textnode;

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