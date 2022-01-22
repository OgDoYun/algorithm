function solution(n, lost, reserve) {
	function losted(item) {
	    if(lost.includes(item)) {
		lost.splice(lost.indexOf(item), 1)
		return false
	    }
	    return true
	}
	
	reserve.filter(losted)
    
	    reserve.forEach((student) => {
	    if(lost.includes(student-1)) lost.splice(lost.indexOf(student-1), 1)
	})    
	return n-lost.length;
    }