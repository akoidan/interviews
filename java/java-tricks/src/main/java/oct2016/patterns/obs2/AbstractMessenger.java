package oct2016.patterns.obs2;

public abstract class AbstractMessenger {
    public String name;
    private Receiver r;
    private String value;
    public AbstractMessenger(Receiver r, String name) {
        this.r = r;
        this.name = name;
    }

    public void setValue(String value) {
        this.value = value;
        r.notify(this);
    }
}
