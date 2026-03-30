package com.company;

/**
 * Created by Nata on 5/20/2017.
 */
public class CertainElementFromArray {
    int[] arr1 = new int[]{2,6,1,7,5,9,0,1,2,4,8};
        public int returnAnElem(int[] arr1) {
            for (int i : arr1) {
                System.out.println(i);
            }
            return 5;
        }
}
