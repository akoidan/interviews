package patterns.cor;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Say what?");
        Scanner scanner = new Scanner(System.in);
        String s = scanner.nextLine();
        Hello hello = new Hello();
        Bye bye = new Bye();
        hello.setNext(bye);
        hello.execute(s);

    }
}
