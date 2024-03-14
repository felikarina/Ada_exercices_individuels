import java.util.Date;

public class Main {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();

        int result = somme();
        System.out.println(result);

        long end = System.currentTimeMillis();
        System.out.println(end - start);
    }

    public static int somme() {
        int count = 0;
        for (int i = 0; i < 1000000; i++) {
            count++;
        }
        return count;
    }
}
