import org.springframework.util.ObjectUtils;

import java.util.Date;

/**
 * Created by andrew on 6/16/17.
 */
public class d {
    static class T1 {
        public Integer i = 15 ;

        void printI() {
            System.out.println(i);
        }
    }

    static class T2 extends T1{
        public Integer i = 16;

        void printI1() {
            System.out.println(i);
        }
    }


    public static void main(String[] args) {
        T2 t = new T2();
        t.printI();
        t.printI1();
    }

//        eMED(20);
//        int e = new int[4][8].length;
//        String s;
//        String fsd = "asd";
//        int a, b, c = 3;
//        b = 3;
//        c = 3;
////        System.out.println(a<b<c);
//        double d = 0;
////        switch (d) {
////
////        }
////        System.out.println(fsd[0]);
////        System.out.println("value "+2+2);
////        StringBuilder b;
//    }
//
//    public static double eMED(int emo) {
//        return emo == 60 ? 1
//                : emo >= 40 && emo < 60 ? upFunc(emo, 40, 60)
//                : emo > 60 && emo <= 80 ? downFunc(emo, 60, 80)
//                : 0;
//    }
//
//
//
//    private static double upFunc(int a, int b, int c) {
//        return 0;
//    }
//
//    private static double downFunc(int a, int b, int c) {
//        return 0;
//    }

}
