package patterns.cor;

import lombok.Setter;

public class Bye implements Next {

    @Setter
    private Next next;

    @Override
    public void execute(String s) {
        if ("bye".equalsIgnoreCase(s)) {
            System.out.println("We're saying bye");
        } else if (next != null) {
            next.execute(s);
        } else {
            System.out.println("No chains found to handle" + s);
        }
    }

}
