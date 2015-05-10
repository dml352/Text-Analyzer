/***********************
@file TextReadability.java
@author Duc Le, CS 164 student
@email dml352@drexel.edu
@date 10/7/2014
@purpose: To determine the difficulty of a text excerpt 
***/

import java.util.Scanner;
import java.io.*;

class TextReadability    {

	/****
	Read a word and decide if it is the end of a sentence. 
	@param word is the word examined
	@return true if word is the final word in a sentence
	****/
	private static boolean countSentence(String word)   {
		if (word.equals(""))
			return false;
		char last = word.charAt(word.length() - 1);
		return (last == '.'  ||  last == ':'  ||  last == ';'     
				||  last == '?'  ||  last == '!');
	}
	
	/***
	Read a word and return the number of syllables in it. Each group of adjacent vowels 
	(a, e, i, o, u, y) counts as one syllable.
	@param word is the examined word
	@return the number of syllables in the word
	***/
	private static int countSyllable(String word)   {
		if (word.equals(""))
			return 0;
		char[] letters = word.toCharArray();
		int syllableCount = 0;
		int run = 0;
		boolean inVowelGroup = false;
		while (run < letters.length)   {   
			char check = letters[run];
			if (check == 'a'  ||  check == 'e'  ||  check == 'i'  ||  check == 'o'  ||  check == 'u'  ||  check == 'y')    {
				if (!inVowelGroup   &&   !(run == letters.length - 1  &&  check == 'e'))   {    // new adjacent vowels group is found.
					inVowelGroup = true;
					syllableCount++;
				}
			}
			else  inVowelGroup = false;
			run++;
		}
		if (syllableCount == 0) return 1;   // a word with no vowels
		else return syllableCount;
	}
	
	/***
	Read the file name and check if it is a .txt file and check if it is in the same directory as this program.
	@param name is the name of the file
	@return a String explaining error, or return "No error." if we have a valid file name.
	***/
	private static String checkFile(String name)   {
		if (name.equals("QUIT"))
			return "No error.";
		String error = "No error.";
		int check = name.lastIndexOf('.');
		if (check < 0  ||  !name.substring(check).equals(".txt"))   {
			error = "Please enter a .txt file.";
		}
		else   {
		try    {
			Scanner readFile = new Scanner(new File(name));
		}
		catch (FileNotFoundException e)   {
			error = "The text file must be in the same directory.";
		}
		}
		return error;
	}
	
	/***
	Convert the FRES to grade level
	@param FRES is the FRES index
	@return the corresponding grade level
	***/
	private static String FREStoGrade(int FRES)   {
		String s = "";
		if (FRES > 90)
			s = "Fifth Grade education";
		else if (FRES > 80)
			s = "Sixth Grade education";
		else if (FRES > 70)
			s = "Seventh Grade education";
		else if (FRES > 65)
			s = "Eighth Grade education";
		else if (FRES > 60)
			s = "Ninth Grade education";
		else if (FRES > 50)
			s = "High School education";
		else if (FRES > 30)
			s = "College Student";
		else if (FRES > 0)
			s = "College Graduate";
		else s = "Law School Graduate";
		return s;
	}
	
	/***
	Convert the FKRA to grade level
	@param FKRA is the FKRA index
	@return grade level
	***/
	private static String FKRAtoGrade(double FKRA)   {
		if (FKRA > 13) 
			return "Higher education";
		int grade = (int) FKRA;
		String s = "" + grade;
		return s;
	}
	
	/*** 
	Compute the SMOG grade level estimate, using the number of polySyllable words and the number of sentences in the text
	@param polySyllable is the number of words with at least 3 syllables
	@param sentence is the number of sentence in the text
	@return the SMOG grade level estimate.
	***/
	private static int Smog(int polySyllable,int sentence)   {
		int density =  polySyllable / sentence;
		int indicator = 30 * density;
		double square = Math.sqrt(indicator);
		int ans = (int) Math.round(square);
		if (Math.abs(indicator - ans * ans) < Math.abs((ans + 1) * (ans + 1) - indicator))
			return ans + 3;
		else return ans + 4;
	}
			
	/***
	Compute the FRES and FKRA index and print out the message.
	@param filename is the name of the file
	@param syllable is the number of syllables in the file
	@param word is the number of words in the file
	@param sentence is the number of sentence in the file.
	@return the output message
	***/
	private static String output(String filename, int syllable, int word, int sentence, int polySyllable)   {
		int FRES = (int) (206.835 - 84.6 * syllable / word - 1.015 * word / sentence);
		double FKRA = 11.8 * syllable / word + .39 * word / sentence - 15.59;
		String message = filename + "\t" + sentence + "\t" + word + "\t" + syllable + "\t" + polySyllable + "\t" + FRES + "\t" + FKRA + "\t" + 
							(double) polySyllable / sentence * 30 + "\n";

		message = message + "The file " + filename + " has Flesch Reading Ease Score of " + FRES +   
							".\nIt requires a level of " + FREStoGrade(FRES) + " to read. " + 
							"\nIts Flesch-Kincaid Grade Level formula is " + FKRA + ", indicating it is at a grade level of " + FKRAtoGrade(FKRA)
							+ "\nIts SMOG grade estimate is " + Smog(polySyllable, sentence);
		return message;					
	}
		
	public static void main(String[] args)   throws IOException {
		
		System.err.println("Enter the file name (or QUIT to quit the program): ");
		System.out.println("Enter the file name (or QUIT to quit the program): ");
		Scanner scan = new Scanner(System.in);
		String name = scan.nextLine();
		System.out.println(name);
		while(!name.equals("QUIT"))  {
			String error = checkFile(name);
			while(!name.equals("QUIT")  &&  !error.equals("No error."))   {
				// print to the testlog
				System.out.println();
				System.out.println(error);
				System.out.println("Enter the file name(or QUIT to quit the program): ");
				
				// print to the screen
				System.err.println();
				System.err.println(error);
				System.err.println("Enter the file name(or QUIT to quit the program): ");
				
				name = scan.nextLine();
				System.out.println(name);
				error = checkFile(name);
			}
			
			// the name is now checked and it is a valid file name or QUIT. If input is QUIT, we will only print to the testlog
			// and no further actions would be done.
			if (!name.equals("QUIT"))  {     
				Scanner readFile = new Scanner(new File(name));
				int sentence = 0;
				int noWord = 0;
				int syllable = 0;
				int polySyllable = 0;
				while(readFile.hasNext())   {
					String word = readFile.next();
					noWord++;
					if (countSentence(word))
						sentence++;
					int syll = countSyllable(word);
					syllable += syll;
					if (syll >= 3)  
						polySyllable++;
				}
				// print result to testlog
				System.out.println(output(name, syllable, noWord, sentence, polySyllable));
				System.out.println();
				
				// print result to screen
				System.err.println(output(name, syllable, noWord, sentence, polySyllable));
				System.err.println();
				
				// prepare to work with a new file
				System.out.println("Enter the file name (or QUIT to quit the program): ");
				System.err.println("Enter the file name (or QUIT to quit the program): ");
				name = scan.nextLine();
			}
			
			System.out.println("QUIT");
		}
	}
}