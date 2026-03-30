package oct2016.patterns.strategy;

/**
 * Created by andrew on 12/22/16.
 */
public class TaxCalculator extends Calculator{

    public TaxCalculator() {
        setAction(new Multiply());
    }
}
