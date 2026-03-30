package oct2016.wait;

import java.util.Comparator;
import java.util.NavigableMap;

/**
 * Created by andrew on 11/29/16.
 */
public class Main implements Comparable, Comparator {

    public static void main(String[] args) throws Exception {
        Main m = new Main();
        Object obj = new Object();
        synchronized (obj) {
            obj.wait();
        }


    }

    @Override
    public int compareTo(Object o) {
        return 0;
    }

    @Override
    public int compare(Object o1, Object o2) {
        return 0;
    }
}
