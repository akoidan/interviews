package java8;

import sun.plugin2.applet.Applet2IllegalArgumentException;

import java.io.IOException;
import java.security.AccessControlException;

public class Check2 {
    public static final void  main(String[] args) {
//        new A();
    }

    interface Adf {

        int a = 3;

    }

    private String a(Integer a) {
        return "";
    }

    private Integer a(Integer a, String b) {
        return 3;
    }

    static class B extends C {
        public B() throws Exception {
            System.out.println("B");
        }
    }
    static class C extends D{
        public C() throws IOException {
            System.out.println("c");
        }

        B asd() throws IOException {
            return null;
        }
    }

    static class D {

        C asd() throws Exception {
            return null;
        }
        public D() {
            System.out.println("d");
        }
    }
}
