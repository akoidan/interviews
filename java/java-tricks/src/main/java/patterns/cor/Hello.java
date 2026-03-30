package patterns.cor;

import lombok.Setter;

public class Hello implements Next {

    @Setter
    private Next next;

    @Override
    public void execute(String s) {
        if ("hello".equalsIgnoreCase(s)) {
            System.out.println("We're saying hello");
        } else if (next != null) {
            next.execute(s);
        } else {
            System.out.println("No chains found to handle" + s);
        }
    }

}
