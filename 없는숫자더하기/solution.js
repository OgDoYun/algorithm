function solution(numbers) {
	let result = 1+2+3+4+5+6+7+8+9
	new Set(numbers).forEach((n)=>{
	    result = result - n
	});
	return result
    }