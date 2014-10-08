//Created by Michael Newman
//createRandomWeapon contructor is used to make a weapon with a random prefix, item type, and suffix. It also assigns it a stat modifier based on the suffix.

var wepType = {
getRand : function(){
	var  i = (Math.round(Math.random() * 10));
				//console.log(i);
			return(wepType.a[i]);
	},

 a : ["sword", "dagger", "mace", "bow", "gun","flail","katana"
	,"hammer","flamethrower","long sword","wand"]
}
var prefix = {

	getRand: function(){
			var i = (Math.round(Math.random() * 10));
				//console.log(i);
			return(prefix.a[i]);
	},

 a : ["small","large","broken","ruined","fortifyed","desolation"
	,"inscribed","ornate","pristine","flawless","master"]

}



var suffix = {

	getRand: function(){
			var i = (Math.round(Math.random() * 10));
				//console.log(i);
			return(suffix.a[i]);
	},

 a : ["hexing","bloodshed","noise","recklessness","thinking"
	,"hiding","smoldering","trickery","ill-fortune","freezing","seiging"]

}


createRandomWeapon = function(){
this.type = wepType.getRand();
this.modifier = suffix.getRand();
this.intMod = 0;
this.strMod = 0;
this.aglMod = 0;
this.name =  prefix.getRand()  +" "+ this.type + " of " + this.modifier;
switch(this.modifier){
	case "hexing":
		this.effect = this.intMod += 10;
		break;
	case "bloodshed":
		this.effect = this.strMod += 10;
		break;
	case "noise": 
		this.effect = this.aglMod -= 10;
		break;
	case "recklessness":
		this.effect = this.aglMod -= 10;
		break;
	case "thinking":
		this.effect = this.intMod += 10;
		break;
	case "hiding":
		this.effect = this.aglMod += 10;
		break;
	case "smoldering":
		this.effect = "burn effect";
		break;
	case "trickery":
		this.effect = this.aglMod + 10;
		break;
	case "ill-fortune":
		this.effect = this.intMod -= 10;
		break;
	case "freezing":
		this.effect = "freeze effect";
		break;
	case "seiging":
		this.effect = this.strGain += 15;
		break;
	default:
		this.effect = "None";
	
		break;
	}
}

var wepArray = new Array();
var myWep = new createRandomWeapon();

for(i=0;i<100;i++){
wepArray.push(new createRandomWeapon());
console.log(wepArray[i].name);
}


console.log(myWep );
console.log("Item: " + myWep.name);
console.log("Type: " + myWep.type);
console.log("Int mod: " + myWep.IntMod + '\n' + "Str mod: " + myWep.strMod + '\n' + "Agl mod: " + myWep.algMod);