function AllocateArray() {//01
	var result1 = document.getElementById("result1"),
		arrLen = document.getElementById("intN").value,
		arr = new Array();
		//console.log(arrLen);
		//console.log(arr);
	for (var i=0; i <= arrLen; i++) {
		arr[i] = i*5;
	}

	result1.innerHTML = arr.join("<br />");
	console.log(arr);
}


function lexiCompare() {//02
	var result2 = document.getElementById("result2"),
	first_arr = document.getElementById("1st").value,
	second_arr = document.getElementById("2nd").value,
	output;

	//console.log(first_arr);
	//console.log(second_arr);

	if (first_arr.length > second_arr.length) {
		output = ">";
		result2.innerHTML = output;
	}
	else if (first_arr.length < second_arr.length) {
		output = "<";
		result2.innerHTML = output;
	}
	else if (first_arr.length == second_arr.length) {
		output = "=";
		result2.innerHTML = output;
	}
}


function maxSequence() {//03
	var result3 = document.getElementById("result3"),
		inputSeq = document.getElementById("NArray").value,
		arr = inputSeq.split(" "),		
		counter = 0, 
		longestSeq = 0,
		value = 0;
		
		for (var i=0; i<=arr.length; i++) {
			if(arr[i] == arr[i+1] ) {
				counter++;
				if (longestSeq < counter) {
					longestSeq = counter;
					value = arr[i];
				}
			}
			else {
				counter = 0;
			}
		}

		if (longestSeq == 0) {
			result3.innerHTML = "no sequence of elements";
		}
		else {
			result3.innerHTML = "The maximal sequence of equal elements in the array is: " + (longestSeq + 1) + " by the number -> " + value;
		}		
}


function maxIncreasingSeq() {//04
	var result4 = document.getElementById("result4"),
		inputSeq = document.getElementById("NArray2").value,
		arr = inputSeq.split(" "),		
		counter = 1, 
		longestSeq = 0, 
		seqNumbers, 
		maxseqNumbers;
		
		for (var i=0; i<=arr.length; i++) {
			if(arr[i] < arr[i+1] ) {
				counter++;
				seqNumbers += arr[i] + " ";				
			}
			else {
				if (longestSeq < counter) {
					longestSeq = counter;
					seqNumbers += arr[i] + " ";
					maxseqNumbers = seqNumbers;
				}
				counter = 1;
				seqNumbers = "";
			}
		}

		if (longestSeq < counter) {
			seqNumbers += arr[arr.length - 1];
			maxseqNumbers = seqNumbers;		
		}

		result4.innerHTML = "The maximal increasing sequence in the array is: " + maxseqNumbers;		
}


function selectionSort() {//05
	var result5 = document.getElementById("result5"),
		inputSeq = document.getElementById("sort").value,
		arr = inputSeq.split(" ");

		/* using array.sort()*/
		//newArr = arr.sort();				
		//result5.innerHTML = newArr;		

		for (var i=0; i<arr.length; i++) {
			var min = i;
			for (var j=i+1; j<arr.length; j++) {
				if (arr[j] < arr[min]) {
					min = j;
				}
			}
			if (i !== min) {
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		arr = arr.filter(function(element){
			return element !== undefined;
		});
		result5.innerHTML = arr.join("<br />");
		console.log(arr);
}


function frequentNumber() {//06
	var result6 = document.getElementById("result6"),
		inputSeq = document.getElementById("freqNum").value,
		arr = inputSeq.split(" "),
		mf = 1,
		m = 0,
		item;

		for (var i=0; i<arr.length; i++) {
			for (var j=i; j<arr.length; j++) {
				if (arr[i] == arr[j]) {
					m++;
				}
				if (mf < m) {
					mf = m;
					item = arr[i];
				}
			}
			m = 0;
		}

		result6.innerHTML = item + " (" + mf + " times) ";		
}


function binarySearch() {//07
	var result7 = document.getElementById("result7"),
		inputArrN = document.getElementById("binArr").value,
		arrItem = inputArrN.split(" "),
		inputX = document.getElementById("binX").value,
		firstIndex = 0,
		lastIndex = arrItem.length-1,
		middleIndex = Math.floor((lastIndex + firstIndex)/2);

//console.log("InputArrN " + inputArrN);
//console.log("arrItem " + arrItem);
//console.log("InputX " + inputX);

		while (arrItem[middleIndex] != inputX && firstIndex < lastIndex) {
			if (inputX < arrItem[middleIndex]) {
				lastIndex = middleIndex - 1;
			}
			else if (inputX > arrItem[middleIndex]){
				firstIndex = middleIndex + 1;
			}
			middleIndex = Math.floor((lastIndex + firstIndex)/2);			
		}

		if (arrItem[middleIndex] != inputX) {
			result7.innerHTML = -1;
		}
		else {
			result7.innerHTML = middleIndex;
		}
}