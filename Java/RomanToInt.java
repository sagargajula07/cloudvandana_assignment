package Helo;

import java.util.*;

//Enter a Roman Number as input and convert it to an integer. (Example: IX = 9)
public class RomanToInt {
	public static void main(String[] args) {

		Map<Character, Integer> romanToInt = new HashMap<>();
		romanToInt.put('I', 1);
		romanToInt.put('V', 5);
		romanToInt.put('X', 10);
		romanToInt.put('L', 50);
		romanToInt.put('C', 100);
		romanToInt.put('D', 500);
		romanToInt.put('M', 1000);

		Scanner scan = new Scanner(System.in);
		System.out.print("Enter a Roman numeral: ");
		String romanNum = scan.nextLine().toUpperCase();

		int result = 0;
		int prevValue = 0;

		for (int i = romanNum.length() - 1; i >= 0; i--) {
			int curValue = romanToInt.get(romanNum.charAt(i));

			if (curValue < prevValue) {
				result -= curValue;
			} else {
				result += curValue;
			}

			prevValue = curValue;
		}

		System.out.println("The integer representation is: " + result);
	}
}
