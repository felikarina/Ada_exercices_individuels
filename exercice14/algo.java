import java.util.Arrays;
public class Main{
    public static void main(String args[]) {
        int[] tabA = { 8, -2, 2, 1, 0, 9, 6 };
        int[] tabresult = result(tabA);
        String rendu = Arrays.toString(tabresult);
        System.out.println(rendu);
    }
    public static boolean goodOrNo(int[] tab) {
        boolean boo = false;
        for (int i = 0; i < tab.length-1; i++) {
            if(tab[i] > tab[i+1]){
                boo = false;
            }
            else{
                boo = true;
            }
        }
        return boo;
    }
    public static int[] tri(int[] tab) {
        for (int x = 0; x < tab.length-1; x++) {
            if(tab[x] > tab[x+1]) {
                int newValue = tab[x];
                tab[x] = tab[x+1];
                tab[x+1] = newValue;
            }
        }
        return tab;
    }
    public static int[] result(int[] tab) {
        boolean booboo = goodOrNo(tab);
        if( booboo == false) {
            tab = tri(tab);
            result(tab);
        }
        return tab;
    }
}