package test;

import lombok.AllArgsConstructor;

import java.util.TreeSet;

public class Df {
    public static void main(String[] args) {
        TreeSet<Integer> objects = new TreeSet<>();
        objects.add(1);
        objects.add(3);
        objects.add(2);
        objects.add(4);
        System.out.println(objects.higher(3));
    }



}
