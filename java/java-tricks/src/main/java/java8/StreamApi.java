package java8;

import java.util.ArrayList;
import java.util.Set;
import java.util.function.BiConsumer;
import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collector;
import java.util.stream.Stream;

public class StreamApi {


    public static void main(String[] args, String asd) {
        int a = 3_123;
    }

    public static void main(String[] args) {
        ArrayList<Integer> objects = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            objects.add(i);
        }

        Stream<Integer> stream = objects.stream();
        stream.filter(p -> p > 80).forEach(System.out::println);
        System.out.println("-------------");
        objects.parallelStream().filter(p -> p > 80).forEach(System.out::println);
//        stream.filter(p -> p > 80).collect()

    }
}
