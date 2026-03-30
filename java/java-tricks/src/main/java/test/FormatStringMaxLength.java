package test;

/**
 * Created by andrew on 2/14/17.
 */
public class FormatStringMaxLength {
    public static void main(String[] args) {
        try {
            System.out.println("LOl");
        } catch (Exception e) {

        }
        System.out.printf("Set %.20s... as current address", "abcdef sdf sdsd sd ssdsd  sd sdsd  sdgh");
    }
}
