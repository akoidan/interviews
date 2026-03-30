package patterns.cor;

public interface Next {
    void setNext(Next n);
    void execute(String s);
}
