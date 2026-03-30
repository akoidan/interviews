package java8;

public class Default {
    public static void main(String[] args) {

        C c = new C();
        c.print();
    }

    static class C implements A,B {

        @Override
        public void print() {
            System.out.println("A prints");
            B.super.print();
            this.koko();
        }

        static void koko() {

        }
    }

    interface A {
        default void print() {
            this.toString();
            System.out.println("OK");
        }

        static void koko() {
            System.out.println("KOKO");

        }

        default void test() {
            System.out.println("test");
        }
    }

    interface B extends A{
        default void print() {
            this.test();
            System.out.println("OK");
        }

        static void koko() {
            System.out.println("KOKO");

        }
    }

}
