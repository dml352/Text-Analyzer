// ------------------------------------------------------------------
// Date/Time scripts
// These scripts facilitate and simplify calculations and display
// of dates.
//
// ------------------------------------------------------------------
//  v1.2 JL Popyack, Sept. 2007
//       added dayDateAndTime(date)
//       added monthDay(date)
//  v1.3 JL Popyack, Oct. 2009
//       added constants in singular form (DAY, SECOND, etc.)
//       added monthDayYear
// ------------------------------------------------------------------

	var month = new Array("January","February","March","April","May","June","July",
						  "August","September","October","November","December")
						  
	var dayName = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
						  
// ------------------------------------------------------------------
//	monthDayYear(date)
//  Input: Provide a date argument created with a statement of the form:
//    var d1 = new Date()
//    var d2 = new Date("May 15, 1976")
//    var d3 = new Date(1976,5,15)
//    var d4 = advanceDate(d1,3*DAYS - 5*MINUTES)
//    var d5 = midnightSameDay(d4)
//      ...
//  Returns: A date in the "Month Date, Year" format, e.g., "May 15, 1976"
//
//  JL Popyack
//  October, 2009
// ------------------------------------------------------------------
	function monthDayYear(date)
	{
		var result 
		with(date)
			result = month[getMonth()] + " " 
					  + getDate() + ", " 
					  + getFullYear()
		return result
	}
	
// ------------------------------------------------------------------
//	showDate(date)
//  Input: Provide a date argument created with a statement of the form:
//    var d1 = new Date()
//    var d2 = new Date("May 15, 1976")
//    var d3 = new Date(1976,5,15)
//    var d4 = advanceDate(d1,3*DAYS - 5*MINUTES)
//    var d5 = midnightSameDay(d4)
//      ...
//  Output: A date in the "Month Date, Year" format, e.g., "May 15, 1976"
//
//  JL Popyack
//  July, 2002
// ------------------------------------------------------------------
	function showDate(date)
	{
		with(date)
			document.write( month[getMonth()] + " " 
					  + getDate() + ", " 
					  + getFullYear()
					  + "<BR>"
					  )
	}
	
// ------------------------------------------------------------------
//	showDateAndTime(date)
//  Input: Provide a date argument created with a statement of the form:
//    var d1 = new Date()
//    var d2 = new Date("May 15, 1976")
//    var d3 = new Date(1976,4,15, 7,31,0)
//             NOTE: Recall 0=January, 1=February, ...
//    var d4 = advanceDate(d1,3*DAYS - 5*MINUTES)
//    var d5 = midnightSameDay(d4)
//      ...
//  Output: A date in the "Month Date, Year, H:MM AM/PM" format, 
//          e.g., "May 15, 1976, 7:31 AM"
//
//  JL Popyack
//  July, 2002
// ------------------------------------------------------------------
	function showDateAndTime(date)
	{
		var hours
		var minutes
		var suffix
	
		with(date)
		{
			hours = getHours()
			if(hours<12)
				suffix = "AM"
			else
			{
				hours -= 12
				suffix = "PM"
			}
			
			if(hours==0)
				hours = 12
	
			minutes = getMinutes()
			if(minutes<10)
				minutes = "0" + minutes
							
			document.write( month[getMonth()] + " " 
					  + getDate() + ", " 
					  + getFullYear() + ", " 
					  + hours + ":" 
					  + minutes + " "
					  + suffix 
					  + "<BR>"
					  )
		}
	}
	
// ------------------------------------------------------------------
//	dayAndDate(date)
//  Input: Provide a date argument created with a statement of the form:
//    var d1 = new Date()
//    var d2 = new Date("May 15, 1976")
//    var d3 = new Date(1976,4,15, 7,31,0)
//             NOTE: Recall 0=January, 1=February, ...
//    var d4 = advanceDate(d1,3*DAYS - 5*MINUTES)
//    var d5 = midnightSameDay(d4)
//      ...
//  Output: A date in the "DayName, Month Day, Year" format, 
//          e.g., "Saturday, May 15, 1976"
//
//  JL Popyack
//  Sept., 2002
// ------------------------------------------------------------------
	function dayAndDate(date)
	{
		var hours
		var minutes
		var suffix
	
		with(date)
		{							
			return dayName[getDay()] + ", "
				 + month[getMonth()] + " " 
				 + getDate() + ", " 
				 + getFullYear() 
		}
	}
	
// ------------------------------------------------------------------
//	dayDateAndTime(date)
//  Input: Provide a date argument created with a statement of the form:
//    var d1 = new Date()
//    var d2 = new Date("May 15, 1976")
//    var d3 = new Date(1976,4,15, 7,31,0)
//             NOTE: Recall 0=January, 1=February, ...
//    var d4 = advanceDate(d1,3*DAYS - 5*MINUTES)
//    var d5 = midnightSameDay(d4)
//      ...
//  Output: A date in the "DayName, Month Day, Year, H:MM AM/PM" format, 
//          e.g., "Saturday, May 15, 1976, 7:31 AM"
//
//  JL Popyack
//  Sept., 2002
// ------------------------------------------------------------------
	function dayDateAndTime(date)
	{
		var hours
		var minutes
		var suffix
	
		with(date)
		{
			hours = getHours()
			if(hours<12)
				suffix = "AM"
			else
			{
				hours -= 12
				suffix = "PM"
			}
			
			if(hours==0)
				hours = 12
	
			minutes = getMinutes()
			if(minutes<10)
				minutes = "0" + minutes
							
			return dayName[getDay()] + ", "
				 + month[getMonth()] + " " 
				 + getDate() + ", " 
				 + getFullYear() + ", " 
				 + hours + ":" 
				 + minutes + " "
				 + suffix 
		}
	}
	
// ------------------------------------------------------------------
//	showDayDateAndTime(date)
//  Input: Provide a date argument created with a statement of the form:
//    var d1 = new Date()
//    var d2 = new Date("May 15, 1976")
//    var d3 = new Date(1976,4,15, 7,31,0)
//             NOTE: Recall 0=January, 1=February, ...
//    var d4 = advanceDate(d1,3*DAYS - 5*MINUTES)
//    var d5 = midnightSameDay(d4)
//      ...
//  Output: A date in the "DayName, Month Day, Year, H:MM AM/PM" format, 
//          e.g., "Saturday, May 15, 1976, 7:31 AM"
//
//  JL Popyack
//  Sept., 2002
// ------------------------------------------------------------------
	function showDayDateAndTime(date)
	{
		document.write( dayDateAndTime(date) )
	}
	
// ------------------------------------------------------------------
//	advanceDate(date,milliseconds)
//  Input: date/time, and an offset in milliseconds - e.g.,
//    var d1 = new Date("May 15, 1976")
//    var d2 = advanceDate(d1,1*WEEKS + 1*DAYS - 5*MINUTES)
//    var d3 = new Date()
//    var d4 = advanceDate(d3,3*DAYS)
//  Returns: A date/time offset by the milliseconds argument
//           e.g., d2 has the value "May 22, 1976, 11:55 PM"
//
//  JL Popyack
//  July, 2002
// ------------------------------------------------------------------

	var SECONDS = 1000        // 1 second = 1000 milliseconds 
	var MINUTES = 60*SECONDS  // 1 minute =   60 seconds
	var HOURS   = 60*MINUTES  // 1 hour   =   60 minutes
	var DAYS    = 24*HOURS    // 1 day    =   24 hours
	var WEEKS   = 7*DAYS      // 1 week   =    7 DAYS
	
	var SECOND  = SECONDS 
	var MINUTE  = MINUTES
	var HOUR    = HOURS
	var DAY     = DAYS
	var WEEK    = WEEKS
	
		
	function advanceDate(date,milliseconds)
	{
		var ms = date.getTime() + milliseconds
		return new Date(ms)
	}

// ------------------------------------------------------------------
//	midnightSameDay(date)
//  Input: date
//    var d1 = new Date(1976,4,15, 7,31,0)
//             NOTE: Recall 0=January, 1=February, ...
//    var d2 = midnightSameDay(d1)
//    var d3 = new Date()
//    var d4 = midnightSameDay(d3)
//  Returns: A date/time that is the very beginning of the same day (midnight) 
//           e.g., d1 has the value "May 15, 1976, 12:00 AM"
//                 d2 has the value "May 15, 1976, 12:00 AM"
//                 d3 has the current time
//                 d4 has the value this morning at midnight
//  JL Popyack
//  July, 2002
// ------------------------------------------------------------------

	function midnightSameDay(date)
	{
		return new Date(date.getFullYear(),date.getMonth(),date.getDate())
	}


// ------------------------------------------------------------------
//	monthDay(date)
//  Input: date
//    var d1 = new Date(1976,4,15, 7,31,0)
//             NOTE: Recall 0=January, 1=February, ...
//    var d2 = monthDay(d1)
//  Returns: A string containing the month and day 
//           e.g., d1 has the value "May 15, 1976, 12:00 AM"
//                 d2 has the value "May 15"
//  JL Popyack
//  March, 2003
// ------------------------------------------------------------------

	function monthDay(date)
	{
		with(date)
		{
			return month[getMonth()] + " " + getDate()
		}
	}
