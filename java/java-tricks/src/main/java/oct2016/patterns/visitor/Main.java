package oct2016.patterns.visitor;

import oct2016.patterns.visitor.model.*;

import java.util.HashMap;

/**
 * Created by andrew on 11/28/16.
 */
public class Main {
    public static void main(String[] args) {
        Plane p = new Plane("BigWings");
        Car c = new Car("BigTrunk");
        Byke b = new Byke("EqualWheels", "BadSeat");
        Visitor v= new SaveVisitor();
        p.accept(v);

    }
}
