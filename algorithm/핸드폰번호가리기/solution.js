function solution(phone_number) {
	const startIdx = phone_number.length - 4
	const phoneNumber = phone_number.split('')
	for(let i=phone_number.length - 1; i>-1; i--) {
	    if(startIdx>i) {phoneNumber[i] = '*'}
	}
	return phoneNumber.join('')
    }