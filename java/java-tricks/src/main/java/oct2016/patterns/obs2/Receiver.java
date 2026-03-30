package oct2016.patterns.obs2;

public class Receiver {

    public void notify(AbstractMessenger am) {
        System.out.printf("%s has been changed", am.name);
    }
}
