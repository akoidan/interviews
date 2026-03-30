package oct2016.patterns.obs2;

public class Main {
    public static void main(String[] args) {
        Receiver r = new Receiver();
        AbstractMessenger am1 = new Messenger1(r);
        AbstractMessenger am2 = new Messenger2(r);
        am1.setValue("A1");
        am2.setValue("A2");
    }
}
