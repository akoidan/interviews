package oct2016.q;

/**
 * Created by andrew on 11/29/16.
 */
public class Main {

    static void koko() {

    }

    class A {
        public String a = "4";

        @Override
        public String toString() {
            return a;
        }

    }

    class B extends A{
        public String a = "5";
        @Override
        public String toString() {
            return super.toString();
        }
    }
    public static void main(String[] args) {
        System.out.println(new Main().new B());
    }
}
