function solution(n, lost, reserve) {
	lost.sort((a,b)=> a-b)
	reserve.sort((a,b)=> a-b)
	
	const temp = reserve.concat()
	
	temp.forEach((reserved) => {
	    if(lost.includes(reserved)) {
		lost.splice(lost.indexOf(reserved), 1)
		reserve.splice(reserve.indexOf(reserved), 1)
	    }
	})
	
	    reserve.forEach((student) => {
	    if(lost.includes(student-1)) {        
		lost.splice(lost.indexOf(student-1), 1)
		return
	    }
	    if(lost.includes(student+1)) {
		lost.splice(lost.indexOf(student+1), 1)
		return
	    }
	})
	return n-lost.length;
    }