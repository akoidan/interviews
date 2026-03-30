package java8;

import java.util.Arrays;
import java.util.List;

public class Lambdas {

    public static void main(String[] args) {
        add3(Arrays.asList(1, 2, 3, 5), a -> a + 3);
        add3(Arrays.asList(1, 2, 3, 5), a1 -> {
            System.out.println(a1 + 3);
            return a1 + 3;
        });

    }

    public static void add3(List<Integer> input, A tracker) {
        input.forEach(System.out::println);
        input.forEach(tracker::doA);
    }

    @FunctionalInterface
    interface A {
        Integer doA(Integer a);
    }
}
