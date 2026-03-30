package oct2016.patterns.strategy;

/**
 * Created by andrew on 12/22/16.
 */
public class Multiply implements MathAction {
    @Override
    public int doAction(int a, int b) {
        return a*b;
    }
}
