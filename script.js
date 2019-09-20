//var message = "in global";
//console.log("global:messag="+ message);

/*var x = 10;
if ( null || console.log("Hello") || x > 5 ) {
  console.log("Hello");
}

var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstname="mark";
//console.log(company);
console.log("the first name is:"+ company.ceo.firstname);
console.log(company.name);
console.log(company["name"]);
console.log(company.ceo["firstname"]);*/

///////////////////

/*function Circle (radius){
	//console.log(this);
	//this.radius = radius;
	var s=radius*2;
	console.log(s);
 
}

var myCircle = new Circle (10);
console.log(myCircle);*/

////////////////////////////

/*function test(){
	console.log(this);
	this.myName="aouicha";
}

test();
console.log(window.myName);
console.log(this.myName);
*/

/////////////////////

/*function doOperation(x,operation){
	return operation(x);
}

function multyplyBy3(x){

	return y= x*3;
}

var result = doOperation(5,multyplyBy3);
console.log(result);*/

////////////////////////////

var literalCircle={
	radius:10,
	getArea:function(){
		var self = this;
		console.log(this);

		var increaseRadius= function(){
			self.radius=20;
		};

		increaseRadius();
		console.log(this.radius)
		return Math.PI *Math.pow(this.radius, 2);

	}

};
console.log(literalCircle.getArea())