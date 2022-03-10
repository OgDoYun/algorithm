function solution(absolutes, signs) {
	const length = absolutes.length
	for(let i=0;i<length;i++) {
	    if(signs[i] === false) absolutes[i] = absolutes[i] * -1
	}
	return absolutes.reduce((p, c) => p + c)
    }