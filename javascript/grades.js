var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

//grade variables
var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;

for (i=0;i<scores.length;i++) {
	console.log(scores[i]);
	if (scores[i]>=91 && scores[i]<=100) {
		gradeA++;
	}else if (scores[i]>=81 && scores[i]<=90) {
		gradeB++;
	}else if (scores[i]>=71 && scores[i]<=80) {
		gradeC++;
	}else if (scores[i]>=61 && scores[i]<=70) {
		gradeD++;
	}else if(scores[i]>=50 && scores[i]<=60) {
		gradeF++;
	};
}

//log number of grades
console.log("You have "+gradeA+" A's, "+gradeB+" B's, "+gradeC+" C's, "+gradeD+" D's, and "+gradeF+" F's.");


//lowest grade
var lowestGrade = 100

for (i=0;i<scores.length;i++) {
	if (scores[i]<lowestGrade) {
		lowestGrade = scores[i];
	}
}
console.log("Your lowest grade was "+lowestGrade+".")

//highest grade
var highestGrade = 50

for (i = 0; i < scores.length; i++) {
	if (scores[i]>highestGrade) {
		highestGrade = scores[i];
	}
}
console.log("Your highest grade was "+highestGrade+".")

