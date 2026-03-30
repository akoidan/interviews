package oct2016.patterns.strategy;

/**
 * Created by andrew on 12/22/16.
 */
abstract public class Calculator {
    MathAction action;

    public int calculate(int a, int b) {
        return action.doAction(a,b);
    }

    public void setAction(MathAction action) {
        this.action = action;
    }
}
