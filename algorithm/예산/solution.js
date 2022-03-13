function solution(d, budget) {
	let answer = 0
	d.sort((a, b) => a - b)
	d.forEach((idx) => {
	    let temp = budget - idx
	    if(temp >= 0) {
		budget = temp
		answer++
	    }
	})
	return answer;
    }