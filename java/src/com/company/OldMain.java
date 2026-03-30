package com.company;

import com.sun.jdi.Value;

import java.util.*;
import java.util.function.UnaryOperator;
import java.util.stream.Stream;

public class Main {

    static class B {}

    static class A {

        private B b;

        public B getB() {
            return b;
        }
    }

    interface Ddd {
        void print(String lol);

        default void print() {
            System.out.printf("lol");
        }
    }

    public static void main(String[] args) {

        Collection<String> collection = Arrays.asList("a", "b", "c");
        Stream<String> streamOfCollection = collection.stream();
        streamOfCollection.map(a -> a.charAt(0)).forEach(System.out::println);

        Set<Integer> a = new HashSet<Integer>();

        a.removeIf(ik-> ik == 2);
        Map<Integer, Integer> b = new HashMap<>();


        System.out.println(b.computeIfAbsent(1, k -> 2));
        System.out.println(b.getOrDefault(1, 3));
        Stream<B> limit = Stream.generate(B::new).limit(2).collect();

        Optional<A> ikk = Optional.of(new A());
        B ddb = ikk.map(A::getB).orElse(null);
        // write your code here
    }
}
