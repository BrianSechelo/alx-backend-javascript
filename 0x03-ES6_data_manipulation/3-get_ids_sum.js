export default function getStudentIdsSum(arr){
	return arr.reduce((accumulator, { id }) => accumulator + id, 0);
}
