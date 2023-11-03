export default function dummy_run() {
    // Variables
    const colors: string[] = ["red", "green", "blue", "yellow"];
    let message1: string = "Colors in the array:";

    // Function to reverse a string
    function reverseString(input: string): string {
        return input.split("").reverse().join("");
    }

    // Loop to process colors
    for (const color of colors) {
        message1 += `\n- ${color}`;
    }

    // Logging
    console.log(message1);

    const reversedMessage = reverseString(message1);
    console.log("\nReversed Message:");
    console.log(reversedMessage);
}