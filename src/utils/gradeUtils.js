export const GRADE_POINTS = {
  'A+': 10.0,
  'A': 9.0,
  'B+': 8.0,
  'B': 7.0,
  'C+': 6.0,
  'C': 5.0,
  'D': 4.0,
  'E': 0.0,
  'F': 0.0, // Treat as 0 for calculation, though usually means fail
  'I': 0.0,
  'X': 0.0
};

export const calculateSGPA = (subjects) => {
  let totalCredits = 0;
  let weightedPoints = 0;

  subjects.forEach(sub => {
    // Ensure we have valid numbers
    const credits = parseFloat(sub.credits) || 0;
    const grade = sub.grade ? sub.grade.toUpperCase() : '';
    const points = GRADE_POINTS[grade] !== undefined ? GRADE_POINTS[grade] : 0;

    // Filter out incomplete/non-registered if they shouldn't count? 
    // User request says: "E, F, I, X -> 0.00"
    // Usually failing grades count towards credits attempted but give 0 points.
    // We'll assume standard calculation: Sum(C*G) / Sum(C)
    // If user wants to exclude 'I' or 'X' from denominator, we'd need a flag.
    // For now, following the table where they exist with 0.00.
    
    // Safety check: if grade is not selected, ignore row? 
    // Or treat as 0? Let's treat valid rows only.
    if (grade && !isNaN(credits) && credits > 0) {
      totalCredits += credits;
      weightedPoints += (credits * points);
    }
  });

  if (totalCredits === 0) return 0.00;
  return (weightedPoints / totalCredits).toFixed(2);
};
