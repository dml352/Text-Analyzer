// ------------------------------------------------------------------
// Gradesheet configuration file
// This is designed to provide uniformity among labs,
// facilitate generating navigation frames,
// and allow automatic re-labeling labs when relocating them 

// ------------------------------------------------------------------
// Insert "Assignment identification" information here.

	var asstNumber = 9
	var asstName   = "Placement Exercise: Text Readability"

// ------------------------------------------------------------------
// Insert "Problem Table" information here.
// Include two entries per line, using the form
//     "Problem Number/Name", numPoints
// e.g.,
//	var problems = new Array(
//		"Problem 13.67 from text",10,
//		"Program",70,
//		"Program Style",10,
//		"External Documentation",10,
//		"Internal Documentation",10
//	)

	var problems = new Array(
	    // --- Written Problems ---
		"Problem R7.3", 8,
		"Problem R7.6", 8,
		"Problem R7.15", 7,
		"Problem R9.1", 8,
		
		// --- Program Related Points --- 
		"Program Logic<br />2 Programs",60,  // correct formula, correct use of math, etc.
		"Subprograms", 10,
		"Output Format", 10, 
		"User Interface",10, // includes iomanip
		"Style",10,
		"Documentation",10,
		
		// --- Extra Credit ---
		"Extra Credit A: More Messages<br />(5 points)",0,
		"Extra Credit B: Lucky Numbers<br />(5 points)",0,
		"Extra Credit C: Random (Park&amp;Miller)<br />(20 points)",0
	)

	var dueDate = "November 13"
	var lateDueDate = "November 13"
	
// -----------------------------------------------------------------------------------
//  The submission time will be set to 11:55 PM of the due date:
//
	dueDate = new Date(dueDate + ", " + year)
	dueDate = midnightSameDay(dueDate)
	dueDate = advanceDate(dueDate, 1*DAYS - 5*MINUTES )
	
// -----------------------------------------------------------------------------------
//  The "late date" submission time will be set to 1:00 PM of the late due date:
//
	lateDueDate = new Date(lateDueDate + ", " + year)
	lateDueDate = midnightSameDay(lateDueDate)
	lateDueDate = advanceDate(lateDueDate, 1*DAYS - 5*MINUTES )