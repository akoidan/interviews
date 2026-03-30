package com.company;

//import static java.lang.System.*;

/**
 * Created by Nata on 5/19/2017.
 */
public class Constants {

    public static void showPaperSize() {

      final double CM_PER_INCH = 2.54;
      double paperWidth = 8.5;
      double paperHeight = 11;
      System.out.println("Paper size in centimeters "+paperWidth*CM_PER_INCH +"by"+paperHeight*CM_PER_INCH);
    }
}
