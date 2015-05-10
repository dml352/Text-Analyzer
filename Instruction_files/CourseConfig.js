// ------------------------------------------------------------------
// Course information file
//
// This file identifies course information that should only need to
// be changed once per term.
//
// This file should be used to contain all course data for the active term. 
// BE SURE TO CHECK THE VARIABLES EVERY TERM.


	var Terms = new Array("","Winter","Spring","Summer","Fall")
	Terms["Winter"] = "Winter"
	Terms["Spring"] = "Spring"
	Terms["Summer"] = "Summer"
	Terms["Fall"] = "Fall"	
	

// ------------------------------------------------------------------
// Insert "Year, Term, and Course" information here.
//   rubric    : subject identifier, e.g., "CS"
//   courseid  : course identifier, e.g., "171"
//   term      : Should be 1, 2, 3, or 4, for "Winter","Spring","Summer","Fall"
//   year      : e.g., "2002"
//   sections  : list of section numbers, e.g., "60...72, 90-91"
//   website   : URL for course website, e.g., "http://www.mcs.drexel.edu/~mcs171/W02"
//   SundayOfWeek1, MondayOfWeek1 : hopefully self explanatory, these are the beginning
//     dates of the term (e.g., "June 16"), and are used to generate due dates 
//     throughout the term, so that for instance, a lab issued in Week 4 will be due 
//     4 weeks past the Sunday of Week 1.

	var rubric = "CS"
	var courseid = "164"
	var coursename = "Introduction to Computer Science"
	var term = "Fall" //4
	var year = 2014
	var sections = "60..64,65H,66..68"
	var website = "http://www.cs.drexel.edu/~introcs/Fa14"
	
	var MondayOfWeek1 = "September 22"
//	var date =  new Date(MondayOfWeek1+", "+year)
//	var dayBefore = advanceDate(date,-1*DAY)
//	var SundayOfWeek1 = monthDay(dayBefore)
	var SundayOfWeek1 = "September 23"
	
// Note that changes here should automatically 
// affect every lecture slide

// ------------------------------------------------------------------
// The name(s) of the instructor(s), followed by their e-mail addresses
// remember to close the last entry with a comma
// Examples:
// (for multiple instructors)
// var instructors = new Array("Jeffrey L. Popyack", "JPopyack@CS.Drexel.edu", // primary instructor
//                  "Bruce Char", "bchar@mcs.drexel.edu", // additional instructor
//					"Paul Zoski", "pzoski@mcs.drexel.edu") // last instructor (ends with a closing brace)
// (for single instructors)
// var instructors = new Array("Paul Zoski", "pzoski@mcs.drexel.edu")

	var instructors = new Array("Jeffrey L. Popyack", "JPopyack@CS.Drexel.edu"
							 )
	
	var undergradTA = new Array(
		new person("Betina Dalope", "mrd88@drexel.edu"),
		new person("Joe Muoio", "jgm55@drexel.edu"),
		new person("Tomas Rodriguez", "qtr23@drexel.edu"),
		new person("Ian Shinbrot", "ijs24@drexel.edu"),
		new person("Danny Ziegler", "dmz38@drexel.edu")
	  )

	var gradTA = new Array
	(
		new person("Renjith Ephrem", "rje49@drexel.edu"),
		new person("Arpita Kulkarni", "abk59@drexel.edu"),
		new person("Anshuman Mohanty", "am3733@drexel.edu")
	)
 
 	var instr = new Array
	(
		
		new faculty("Prof.", "Jeffrey L. Popyack", "JPopyack@CS.Drexel.edu", 
		"Univ. Crossings 141", "(215) 895-1846", 
		"http://www.cs.drexel.edu/~jpopyack", "M 11:00-12:00, W 9:00-11:00*, W 2:00-3:00"),

		new faculty("Prof.", "Brian L. Stuart", "blstuart@Drexel.edu", 
		"Univ. Crossings 100", "(215) 895-yyyy", 
		"http://www.cs.drexel.edu/~bls96", "M 2:00-3:00, W 3:00-4:00, R 2:00-3:00")//,

	  )
	
	var deptInfo = new dept("Dept. of Computing","100 University Crossings",
							"(215) 895-2669","(215) 895-0545","http://www.cs.drexel.edu")
	
	var lectureSection = new Array
	(
		new lectureSection("A","Monday","2:00-3:20","Curtis 340","Prof. Jeffrey L. Popyack","10794"),
		new lectureSection("B <i>(Honors)</i>","Monday","3:30-4:50","Curtis 353","Prof. Jeffrey L. Popyack","13391"),
		new lectureSection("C","Monday","3:30-4:50","Stratton 113","Prof. Brian L. Stuart","16262")
	)

	var labSection = new Array(
		new labSection(60,"Thursday","11:00-12:50","DXLPLZ 009","Arpita, Joe","10327"),
		new labSection(66,"Friday","9:00-10:50","Korman 105D","Renjith, Tomas","14757"),
		new labSection(61,"Thursday","13:00-14:50","UCross 151","Anshuman, Joe","12903"),
		new labSection(62,"Friday","11:00-12:50","SC 326","Renjith, BLS","10956"),
		new labSection("65H","Thursday","15:00-16:50","DXLPLZ 043","Tomas, JLP","13390"),
		new labSection(63,"Friday","13:00-14:50","Korman 105D","Anshuman, Danny","10291"),
		new labSection("","","","","",""),
		new labSection(64,"Friday","15:00-16:50","Korman 105D","Arpita, Danny","12458"),
		new labSection(67,"Wednesday","9:00-10:50","SC 326","Renjith, Betina, JLP","16279"),
		new labSection(68,"Friday","11:00-12:50","Korman 105D","Arpita, Ian","16280")
	)

							
// ------------------------------------------------------------------
// Authors of the Course Notes
// (in case you don't want to take the blame for
// their mistakes)
						
	var previousAuthors = new Array
	(
		"Paul Zoski","PZoski@Math.Drexel.edu",
		"Jeff Salvage","JSalvage@CS.Drexel.edu"
	)

	var revisionYear = 2014 // the last year somebody corrected the slides
	
	var lectureAuthors = new Array
	(
		"Jeffrey L. Popyack","JPopyack@CS.Drexel.edu"
	)

	var ColumbusDay = "October 13"
	var Convocation = "October 7"
	var Thanksgiving = "November 27"

	ColumbusDay = new Date(ColumbusDay + ", " + year)
	Convocation = new Date(Convocation + ", " + year)
	Thanksgiving = new Date(Thanksgiving + ", " + year)
	
	var campusMap = "http://www.drexel.edu/admissions/visit/directions/map-university-city/"
	var campusTour = "http://www.drexel.edu/em/virtualtour/"
	var KormanMap = "http://www.drexel.edu/irt/facilities/equipment/~/media/Files/irt/swf/kormanMapV2.ashx"
	var DU_bookstore = "http://drexel.bkstore.com/default.asp?m=0201"
	var IRT_FAQ = "http://www.drexel.edu/irt/computers/buyers-guide/"
	var DU_Software = "http://www.drexel.edu/irt/software/"
	var compiler = "Visual C++/Visual Studio .NET 2012 Professional Edition"
	var BB_site = "http://learn.dcollege.net/"
	var BB_version = "Blackboard Learn 9.1 SP 14"
	var IRT_site  = "http://www.drexel.edu/irt/"
	var discussionSite = "http://piazza.com/drexel/fall2014/cs164/home"
	var BbMirror = "https://learn.dcollege.net/bbcswebdav/courses/XLSCS164ABCcvk201415/website"
	var student_handbook = "http://www.drexel.edu/studentlife/community_standards/studentHandbook/"
	
	var academicDishonesty = "http://www.drexel.edu/studentlife/community_standards/community_standards_student_handbook/~/media/Files/studentlife/pdf/StudentHandbook2011.ashx"
	var ODS = "http://drexel.edu/disability"
	var univAcademicCalendar = "http://www.drexel.edu/provost/calendars/"

	var mostRecentCS171 = "http://www.cs.drexel.edu/~mcs171/Wi14/index.html"
	var yearTermCS171 = "Winter 2014"
	
	var mostRecentCS172 = "http://www.cs.drexel.edu/~mcs172/Sp14/index.html"
	var yearTermCS172 = "Spring 2014"
//	var univAcademicCalendar = "http://www.drexel.edu/provost/calendars/quarter/quarter-"+parseInt(year%100)+parseInt((year+1)%100)+".html"


// ------------------------------------------------------------------
// Other variables constructed from information provided above
	
	var coursenum = rubric + " " + courseid               // e.g., "CS 171"
	var course    = coursenum + "-" + sections            // e.g., "CS 171-60...72, 90-91"
	var courseprefix = rubric.toLowerCase() + courseid    // e.g., "cs171"


//	coursenum = "CS 164/SE 101"
//	course = coursenum

//------------------------------------------------------------------
// Set currentAsst=0 at beginning of course.  Update this value whenever
// a new assignment is to be publicized.
	
	var currentAsst = 6
