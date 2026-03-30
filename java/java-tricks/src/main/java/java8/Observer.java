package java8;

import com.sun.org.apache.xerces.internal.impl.dv.dtd.NOTATIONDatatypeValidator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.annotation.Generated;

public class Observer {

    public static void main(String[] args) {
        Notifiable m = (object) -> System.out.printf("Changed %s \n", object);
        User user = new User(m);
        user.setName("asd");
    }

    @FunctionalInterface
    interface Notifiable {
        void notifyChanges(Object who);
    }

    @Getter
    @ToString(of = {"name"})
    static class User {
        public User(Notifiable n) {
            this.n = n;
        }

        private Notifiable n;
        private String name;

        public void setName(String name) {
            this.name = name;
            n.notifyChanges(this);
        }
    }

    @Getter
    @Setter
    static class Group {

        public Group(Notifiable n) {
            this.n = n;
        }

        private Notifiable n;
        private String name;

        public void setName(String name) {
            this.name = name;
            n.notifyChanges(this);
        }
    }
}
