// -------------------------------------------------------------------------------------
// Developer Lab Tools
//  v3.01, October 2009
//  v3.0, October 2007
//  v2.31, November 2003
//  v2.4, October 2009
//  v2.41, October 2013
// -------------------------------------------------------------------------------------
//
// This version of LabTools.js should be used while developing a lab.  It will show
// the layout of the lab as it will appear when ported to WebCT quiz format.
// Category names, Question names and numbers are generated uniquely and 
// automatically.
// Question boxes appear as they will appear in the WebCT quiz.
// A "Table of contents navigation guide" containing links to each section is generated 
// automatically and appears at the end of the document.
// When development is finished, the HTML generated for this table of contents should 
// be copied and inserted in the beginning.
//
// Modifications:
// Nov 2003 -- fixed Due Date generation to account for change in Daylight Savings Time
//             fixed generation of Roman Numerals (<UL Type=I> changed to <OL Type=I>)
// Oct 2007 -- added ShowImage, ShowImageWithAttributes
//             generated HTML tags are now in lower case
//             textarea now is 100 columns and READONLY
// Oct 2009 -- added LabHeader_wImage(), preLabHeader_wImage(), 
//             minor formatting changes: lining up braces, remaining HTML tags in lowercase
// Oct 2013 -- added ConvertRef, for compatibility with WebCT_Tools.js
// -------------------------------------------------------------------------------------
// Global Variables:
//
//   sectNum :  keeps track of section number for lab instructions
//   stepNum :  keeps track of step number for lab instructions
//   questionNum :  keeps track of question number for lab sheet instructions
// -------------------------------------------------------------------------------------

     var sectNum=0
     var stepNum=0
     var questionNum=0
	 
     var RomanNumeral = Array("0","I","II","III","IV","V","VI","VII","VIII","IX","X",
                              "XI","XII","XIII","XIV","XV")
	 
 	// sect holds the name of each section created.
 	// anch holds the name of the anchor assigned to each section.
	// The dimension (20) is arbitrary and can be changed.
  	 var anch = new Array(20)
	 var sect = new Array(20)
    

// -------------------------------------------------------------------------------------
// LabHeader(DueDate)
// -------------------------------------------------------------------------------------
//
// Usage: LabHeader("Monday")
//	The DueDate can be changed as desired.  Hey, you can
//  even include calendar dates. e.g. "Monday, Feb. 19"
//
// Purpose: 
//	Puts the standard header at the top of every lab
//  sheet.
//
// Requirements:
//   The file config.js contains global data on the lab.
//   (Such as author, lab title, etc.)
//   config.js is well documented - please see that file
//   for more details
//
// To Do:
//    For now, (a copy of) this file should be in the same directory as
//    the lab.  Eventually, we'll have to come up with a stable
//    "universal" version to put in the scripts folder.
// 
//	Author:
//		Paul Zoski (pzoski@mcs.drexel.edu)
//	Revised:
//		JL Popyack (JPopyack@MCS.Drexel.edu) : usage of showDayDateAndTime 
// -------------------------------------------------------------------------------------


function preLabHeader(DueDate) 
{
	preLabHeader_wImage(DueDate,"")
}

function preLabHeader_wImage(DueDate,image) 
{

	var numColumns=0
	numColumns++   // The leftmost (yellow) column is #1
	numColumns++   // The author column is #2
	if( program.length>0 ) numColumns++
	if( reading.length>0 ) numColumns++
	if( lecture.length>0 ) numColumns++
	if( related.length>0 ) numColumns++

	with(document) 
	{

		// Course and Lab info
		writeln("<table WIDTH=100% BORDER=0 CELLPADDING=1 BGCOLOR=#000000>\n<tr>\n<td BGCOLOR=#000000>")
		writeln("<table WIDTH=100% CELLPADDING=10 CELLSPACING=0>")
		writeln("<tr BGCOLOR=#FFCC99>\n<td VALIGN=TOP COLSPAN=" + numColumns + ">") //Note: COLSPAN varies since #columns varies
		if( image != "" )
			ShowImageWithAttributes(image,"ALIGN=right")
		writeln("<h1>" + course + " " + Terms[term] + " " + year + "<br />")
		writeln("pre-Lab " + labNumber + " Exercise: " + labName + "</h1>")
		writeln("</td>\n</tr>\n<tr BGCOLOR=#FFFFFF>\n<td VALIGN=TOP BGCOLOR=#FFFF99>\n<h1>&nbsp;</h1>\n</TD>")
		writeln("<td VALIGN=TOP>")
		writeln("<h4>Written: " + author + ", " + date)
	}

	for(i=0; i<revision.length; i++) 
	{
		if(i==0)
		   document.write("<br />Revised: ")
		else
		   document.write(", ")
		document.write(revision[i])
	}



	with(document) 
	{

		//Due Date 

//		write("<br>Due: at end of Lab period")
		write("<br /><font COLOR=#990000>Due: ")
		var d1 = new Date(SundayOfWeek1 + ", " + year)
		d1 = midnightSameDay(d1)
		var d2 = advanceDate(d1,(labNumber-1)*WEEKS+4*DAYS)
	// ------------------------------------------------------------------
	// Ensure that d2 is midnight (it may be 1 AM if Daylight Savings Time
	// begins between d1 and d2 - or 11 PM if it stops between d1 and d2 ) 
	// ------------------------------------------------------------------
		d2 = advanceDate(d2, 6*HOURS)
		d2 = midnightSameDay(d2)
		d2 = advanceDate(d2,-5*MINUTES)
		if(DueDate=="")
			showDayDateAndTime(d2)
		else
			document.write(DueDate)
		writeln("</font></h4>")
	

// ------------------------------------------------------------------
//	Links to programs

	var index,num
 	for(i=0; i<program.length; i++) 
	{
 		if(i==0) 
		{
 			writeln("</td><td VALIGN=TOP>")
			document.writeln("<p><font FACE=Arial COLOR=#990000>" +
 		                     "<b>Programs:</b></font>")
		}					   
		index = program[i].lastIndexOf("/")
		if( index < 0 || index > program[i].length )
			index = -1
		
		num = program[i].length - index - 1
		
		document.writeln("<br /><a HREF=" + program[i]
 		             + " TARGET=_code><font SIZE=-2 FACE=Arial>"
 		             + program[i].substr(index+1,num) + "</font></a>")
 	}


// ------------------------------------------------------------------
//	Reading Assignments

 	for(i=0; i<reading.length; i++) 
	{
 		if(i==0) 
		{
 			writeln("</td><td VALIGN=TOP>")
			document.writeln("<p><font FACE=Arial COLOR=#990000>" +
 		                     "<b>Reading:</b></font>")
		}
 		document.writeln("<br /><font SIZE=-2 FACE=Arial>"
 		             + reading[i] + "</font></a>")
 	}


// ------------------------------------------------------------------
//	Links to Course Notes

 	for(i=0; i<lecture.length; i+=2) 
	{
 		if(i==0) 
		{
 			writeln("</td><td VALIGN=TOP>")
			document.writeln("<p><font FACE=Arial COLOR=#990000>" +
 		                     "<b>Course Notes:</b></font>")
		}
 		document.writeln("<br><a HREF=" + lectPrefix + lecture[i]
 		             + " TARGET=_lecture><font SIZE=-2 FACE=Arial>"
 		             + lecture[i+1] + "</font></a>")
	}
 
// ------------------------------------------------------------------
//	Related Links

 	for(i=0; i<related.length; i+=2) 
	{
 		if(i==0) 
		{
 			writeln("</td><td VALIGN=TOP>")
			document.writeln("<P><font FACE=Arial COLOR=#990000>" +
 		                     "<b>Related Links:</b></font>")
		}
 		document.writeln("<br /><a HREF=" + related[i]
 		             + " TARGET=_links><font SIZE=-2 FACE=Arial>"
 		             + related[i+1] + "</font></a>")
 	}
 	

	writeln("</td></tr></table>")
	writeln("</td></tr></table>")
	}
}

function LabHeader(DueDate) 
{
	LabHeader_wImage(DueDate,"")
}

function LabHeader_wImage(DueDate,image) 
{
	var numColumns=0
	numColumns++   // The leftmost (yellow) column is #1
	numColumns++   // The author column is #2
	if( program.length>0 ) numColumns++
	if( reading.length>0 ) numColumns++
	if( lecture.length>0 ) numColumns++
	if( related.length>0 ) numColumns++

	with(document) 
	{

		// Course and Lab info
		writeln("<table WIDTH=100% BORDER=0 CELLPADDING=1 BGCOLOR=#000000>\n<tr>\n<td BGCOLOR=#000000>")
		writeln("<table WIDTH=100% CELLPADDING=10 CELLSPACING=0>")
		writeln("<tr BGCOLOR=#99CCCC>\n<td VALIGN=TOP COLSPAN=" + numColumns + ">") //Note: COLSPAN varies since #columns varies
		if( image != "" )
			ShowImageWithAttributes(image,"ALIGN=right")
		writeln("<h1>" + course + " " + Terms[term] + " " + year + "<br>")
		writeln("Lab " + labNumber + ": " + labName + "</h1>")
		writeln("</td>\n</tr>\n<tr BGCOLOR=#FFFFFF>\n<td VALIGN=TOP BGCOLOR=#FFFF99>\n<h1>&nbsp;</h1>\n</td>")
		writeln("<td VALIGN=TOP>")
		writeln("<h4>Written: " + author + ", " + date)
	}

	for(i=0; i<revision.length; i++) 
	{
		if(i==0)
		   document.write("<br />Revised: ")
		else
		   document.write(", ")
		document.write(revision[i])
	}



	with(document) 
	{

		//Due Date 

//		write("<br>Due: at end of Lab period")
		write("<br /><font COLOR=#990000>Due: ")
		var d1 = new Date(SundayOfWeek1 + ", " + year)
		d1 = midnightSameDay(d1)
		var d2 = advanceDate(d1,(labNumber-1)*WEEKS+4*DAYS)
	// ------------------------------------------------------------------
	// Ensure that d2 is midnight (it may be 1 AM if Daylight Savings Time
	// begins between d1 and d2 - or 11 PM if it stops between d1 and d2 ) 
	// ------------------------------------------------------------------
		d2 = advanceDate(d2, 6*HOURS)
		d2 = midnightSameDay(d2)
		d2 = advanceDate(d2,-5*MINUTES)
		if(DueDate=="")
			showDayDateAndTime( d2 )
		else
			document.write(DueDate)
		writeln("</font></h4>")
	

// ------------------------------------------------------------------
//	Links to programs

	var index,num
 	for(i=0; i<program.length; i++) 
	{
 		if(i==0) 
		{
 			writeln("</td><td VALIGN=TOP>")
			document.writeln("<P><font FACE=Arial COLOR=#990000>" +
 		                     "<b>Programs:</b></font>")
		}					   
		index = program[i].lastIndexOf("/")
		if( index < 0 || index > program[i].length )
			index = -1
		
		num = program[i].length - index - 1
		
		document.writeln("<br /><a HREF=" + program[i]
 		             + " TARGET=_code><font SIZE=-2 FACE=Arial>"
 		             + program[i].substr(index+1,num) + "</font></a>")
 	}


// ------------------------------------------------------------------
//	Reading Assignments

 	for(i=0; i<reading.length; i++) 
	{
 		if(i==0) 
		{
 			writeln("</td><td VALIGN=TOP>")
			document.writeln("<p><font FACE=Arial COLOR=#990000>" +
 		                     "<b>Reading:</b></font>")
		}
 		document.writeln("<br /><font SIZE=-2 FACE=Arial>"
 		             + reading[i] + "</font></a>")
 	}


// ------------------------------------------------------------------
//	Links to Course Notes

 	for(i=0; i<lecture.length; i+=2) 
	{
 		if(i==0) 
		{
 			writeln("</td><td VALIGN=TOP>")
			document.writeln("<p><font FACE=Arial COLOR=#990000>" +
 		                     "<b>Course Notes:</b></font>")
		}
 		document.writeln("<br /><a HREF=" + lectPrefix + lecture[i]
 		             + " TARGET=_lecture><font SIZE=-2 FACE=Arial>"
 		             + lecture[i+1] + "</font></A>")
	}
 
// ------------------------------------------------------------------
//	Related Links

 	for(i=0; i<related.length; i+=2) 
	{
 		if(i==0) 
		{
 			writeln("</td><td VALIGN=TOP>")
			document.writeln("<p><font FACE=Arial COLOR=#990000>" +
 		                     "<b>Related Links:</b></font>")
		}
 		document.writeln("<br /><a HREF=" + related[i]
 		             + " TARGET=_links><font SIZE=-2 FACE=Arial>"
 		             + related[i+1] + "</font></A>")
 	}
 	

	writeln("</td></tr></table>")
	writeln("</td></tr></table>")
	}
}

// -------------------------------------------------------------------------------------
// ContentsBar()
// -------------------------------------------------------------------------------------
//
// Usage: ContentsBar()
//
// Purpose: 
//	Displays a "return to contents" bar as a section break.
//
// Cautions:
//   This also displays a "return to (course) home page" message.
//   The external link that goes with this message can get
//   misdirected if anyone starts messing with the directory
//   structure.
// 
// Author:
//		Paul Zoski (pzoski@mcs.drexel.edu)
// Modified:
//      Jeff Popyack (JPopyack@MCS.Drexel.edu), Sept. 2001
//      -- commented out the "return to home page" table entry and link.

function ContentsBar() 
{
	with(document) 
	{
		writeln("<p><table BORDER=0 CELLPADDING=0 WIDTH=100%>")
		writeln("<tr BGCOLOR=#FFFF99>")
		writeln("<td><p><font SIZE=-2>Click </font><a HREF=#Contents><font SIZE=-2>here</font></a><font SIZE=-2>")
		writeln("to return to table of Contents. </font></td>")
//		writeln("<TD ALIGN=right><P><FONT SIZE=-2>Click </FONT><A HREF=\"../../index.html\" TARGET=_top><FONT SIZE=-2>here</FONT></A><FONT SIZE=-2>")
//		writeln("to return to " + coursenum + " home page. </FONT></TD>")
		writeln("</tr></table>")
		
		writeln("<p>&nbsp;")
	}
}


// -------------------------------------------------------------------------------------
// NewSection(anchor,name)
// -------------------------------------------------------------------------------------
//
// Usage: NewSection("Anchor Name","Section Name")
//
// Purpose: 
//  Initializes new section in lab instructions.
//  Calls ContentsBar(), prints section name, 
//    increments sectNum and sets stepNum back to 0.
//
// Side Effects:
//  Alters global variables sectNum, stepNum
// 
// Author:
//		JL Popyack (JPopyack@MCS.Drexel.edu)
// Modified:
//      Sept 2001, JL Popyack - added Roman Numerals to headers     
//      Jan 2002, JL Popyack - added sect[] usage     
// -------------------------------------------------------------------------------------

function NewSection(anchor,name) 
{
	ContentsBar()
	anch[sectNum] = anchor
	sect[sectNum] = name
	sectNum++
	stepNum=0
	document.writeln("<a NAME=" + anchor + "><h4>" + RomanNumeral[sectNum] + ". " 
	                 + name + ":</h4></a>")
}


// -------------------------------------------------------------------------------------
// NewStep()
// -------------------------------------------------------------------------------------
//
// Usage: NewStep()
//
// Purpose: 
//  Increments stepNum and displays step number 
//
// Side Effects:
//  Alters global variable stepNum
// 
// Author:
//		JL Popyack (JPopyack@MCS.Drexel.edu)
// -------------------------------------------------------------------------------------

function NewStep() 
{
	stepNum++
	document.writeln("<p><i>Step " + stepNum + "</i>: ")
}


// -------------------------------------------------------------------------------------
// EndLab()
// -------------------------------------------------------------------------------------
//
// Usage: EndLab()
//
// Purpose: 
//  compatibility with "WebCT lab questions" generator sheet
//
// Side Effects:
//  Alters global variable W
// 
// Author:
//		JL Popyack (JPopyack@MCS.Drexel.edu)

function EndLab() 
{
//  For the "designer" version of LabTools.js,
//  this function creates a "Table of Contents"
//  from the anchors created for each "New Section"
//  JL Popyack, Jan 2002

	document.writeln("<a NAME=Contents></a>")
	document.writeln("<p><b>Contents:</b>\n")
	document.writeln("<ol TYPE=I>")
	
	var i
	for(i=0; i<sectNum; i++)
		document.writeln("  <li><a HREF=#" + anch[i] + ">" + sect[i] + "</a></li>")	

	document.writeln("</ul>\n")
}



// -------------------------------------------------------------------------------------
// NewQuestion()
// -------------------------------------------------------------------------------------
//
// Usage: NewQuestion()
//
// Purpose: 
//  Designates the beginning of a new segment culminating
//  in a question whose answer is to be recorded.
//
// Side Effects:
//  Alters global variable questionNum
// 
// Author:
//		JL Popyack (JPopyack@MCS.Drexel.edu)
// -------------------------------------------------------------------------------------

function NewQuestion() 
{
	if(questionNum>0)
//		document.writeln("<FORM><INPUT TYPE=text SIZE=80></FORM>")
		document.writeln("<form><textarea ROWS=5 COLS=100 READONLY> </textarea></form>")
	questionNum++
//	document.writeln("<P>----------------------------- Question " + questionNum + " -----------------------------<BR>")
//	document.writeln("<hr /><h3>Question " + questionNum + ":</h3><br />")
	document.writeln("<hr /><h3>Question " + questionNum + ":</h3>")
}

// -------------------------------------------------------------------------------------
// LastQuestion()
// -------------------------------------------------------------------------------------
//
// Usage: LastQuestion()
//
// Purpose: 
//  Designates the end of the "questions" segment of the lab.
//
// Author:
//		JL Popyack (JPopyack@MCS.Drexel.edu)
// -------------------------------------------------------------------------------------

function LastQuestion() 
{
//	document.writeln("<FORM><INPUT TYPE=text SIZE=80></FORM>")
	document.writeln("<form><textarea ROWS=5 COLS=100 READONLY> </textarea></form>")
//	document.writeln("<P>----------------------------- End of Questions ----------------------------<BR>")
	document.writeln("<hr /><h3>End of Questions</h3><hr />")
}

// -------------------------------------------------------------------------------------
// ShowURL(text,ref)
// -------------------------------------------------------------------------------------
// This function allows a URL 'ref' to be given either as an
// absolute or relative reference, and will display it as an
// absolute reference.
// This is useful when hardcopy is desired that shows explicitly
// an absolute URL.  The URL will automatically be updated even
// when the location of the source file changes.

// Example:
// Suppose the base URL of the document is "http://www.isp.com/bin/index.html"
// Inserting this reference
//   ShowURL("click here", "../info.html")
// produces the HTML
//   <A HREF="../info.html">click here</A> (<TT>http://www.isp.com/info.html</TT>)

// JL Popyack, Oct. 1998
//    Modified Mar. 2000 - added ShowURLinTarget.  Allows link to open in target
//                         window or frame.
//    Modified Jan. 2001 - changed ShowURL to use JavaScript text functions rather
//                         than HTML.  Allows display of link in document's link color
//                         instead of blue.
// -------------------------------------------------------------------------------------

var NumRefs=0

function ShowURL(text,ref) 
{
  document.write(text.link(ref))
  if(document.links.length-1 > NumRefs) 
    NumRefs = document.links.length - 1
  var theRef = document.links[NumRefs++].href
  var linkColor = document.linkColor
  document.write(" (" + theRef.fontsize(-1).fontcolor(linkColor).fixed() + ")")
}

function ShowURLinTarget(text,ref,target) 
{
  document.write("<a HREF=" + ref + " TARGET=" + target + ">" + text + "</a>") 
   if(document.links.length-1 > NumRefs) 
    NumRefs = document.links.length - 1
  var theRef = document.links[NumRefs++].href
  var linkColor = document.linkColor
  document.write(" (" + theRef.fontsize(-1).fontcolor(linkColor).fixed() + ")")
}

function oldShowURL(text,ref) 
{
  document.write("<a HREF=" + ref + ">" + text + "</a>") 
  NumRefs = document.links.length - 1
  document.write(" (<font SIZE=-1 COLOR=0000FF><tt>" + document.links[NumRefs].href + "</tt></font>)")
}

// -------------------------------------------------------------------------------------
// ShowImage(ref)
// -------------------------------------------------------------------------------------
	function ShowImage(ref) 
	{
	  document.write("<img src=" + ref + " />") 
	}


// -------------------------------------------------------------------------------------
// ShowImageWithAttributes(ref,attributes)
// -------------------------------------------------------------------------------------
	function ShowImageWithAttributes(ref,attributes) 
	{
	  document.write("<img src=" + ref + " " + attributes + " />") 
	}


// -------------------------------------------------------------------------------------
// ConvertRef(ref,website)
// provided for compatibility with WebCT_LabTools.js only
// -------------------------------------------------------------------------------------
	function ConvertRef(ref,website)
	{
		return ref
	}

