package Helo;

//Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it
import java.util.*;

public class Shuffle {
	public static void main(String[] args) {
		int[] arr = { 1, 2, 3, 4, 5, 6, 7 };

		Random random = new Random();
		for (int i = arr.length - 1; i > 0; i--) {
			int index = random.nextInt(i + 1);

			// Swapping arr[i] and arr[index]
			int temp = arr[i];
			arr[i] = arr[index];
			arr[index] = temp;
		}

		// Print the shuffled array
		System.out.println(Arrays.toString(arr));
	}

}
