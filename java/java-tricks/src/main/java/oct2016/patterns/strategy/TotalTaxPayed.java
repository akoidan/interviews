package oct2016.patterns.strategy;

import java.util.List;

/**
 * Created by andrew on 12/22/16.
 */
public class TotalTaxPayed extends Calculator {

    public TotalTaxPayed() {
        this.setAction(new Add());
    }
}
