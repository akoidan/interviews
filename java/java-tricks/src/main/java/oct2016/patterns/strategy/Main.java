package oct2016.patterns.strategy;

/**
 * Created by andrew on 12/22/16.
 */
public class Main {

    public static void main(String[] args) {
        TaxCalculator taxCalculator = new TaxCalculator();
        TotalTaxPayed totalTaxPayed = new TotalTaxPayed();
        System.out.println(taxCalculator.calculate(50, 2));
        System.out.println(totalTaxPayed.calculate(50, 2));


    }
}
