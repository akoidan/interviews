package java8;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class Loops {
    public static void main(String[] args) {
        String[] strings = {"1", "2", "3"};
        List<String> arrayList = Arrays.asList(strings);
        arrayList.forEach(new Consumer() {
            @Override
            public void accept(Object o) {
                System.out.println(o);
            }
        });

    }

}
