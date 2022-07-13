let arr1 = [1,2,3];
let arr2 = [4,5,6,7,8,9];

function spreedOp (arr1,arr2){
	let a;
    for(let i = 0;i => 0;i++){
			a = arr2.shift();
			if(a != undefined){arr1.push(a)}
			else{break}
	}return arr1;
}

console.log(spreedOp(arr1,arr2));// [1,2,3,4,5,6,7,8,9]