package Helo;

import java.util.*;

public class Panagram {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter the sentence");
		String str = scan.nextLine();
		containAllLetters(str);
	}

	public static void containAllLetters(String string) {

		string = string.toLowerCase();
		boolean allLetterPresent = true;

		for (char ch = 'a'; ch <= 'z'; ch++) {

			if (!string.contains(String.valueOf(ch))) {
				allLetterPresent = false;
				break;
			}
		}

		if (allLetterPresent)

			System.out.println("Pangram String");
		else

			System.out.println("Not a Pangram String");
	}

}
