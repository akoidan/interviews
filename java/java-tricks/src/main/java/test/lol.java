package test;

import java.util.*;

/**
 * Created by andrew on 1/10/17.
 */
public class lol {
    public static void main(String[] args) {
        for (Integer integer : Arrays.asList(3, 4)) {
            System.out.println(integer);
        }
    }

    public static void main2(String[] args) {

        Iterator<Integer> iterator = Arrays.asList(3, 4).iterator();
        search:
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
            continue search;
        }

    }
}
