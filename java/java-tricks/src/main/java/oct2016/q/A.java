package oct2016.q;

import java.util.HashMap;
import java.util.Map;

public class A {
    public String name;

    public int hashCode(){
        return name.hashCode();
    }

    public boolean equals(Object o){
        if(o instanceof A){
            return name.equals( ((A)o).name );
        }
        return false;
    }

    public static void main(String[] args) {
        Map<A, Integer> map = new HashMap<A, Integer>();
        A a1 = new A();
        a1.name="one";

        map.put(a1, 1);

        a1.name="two";
        A a2=new A();
        a2.name="one";

        map.put(a2, 2);
        System.out.println(map.get(a1));
        System.out.println(map.get(a2));
        System.out.println(map.size());
    }
}