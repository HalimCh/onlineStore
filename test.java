import java.util.Comparator;
import java.util.HashSet;
import java.util.TreeSet;

class Test {
    public static void main(String[] args) {
        HashSet<Integer> set = new HashSet<>();
        set.add(Integer.valueOf(50));
        set.add(Integer.valueOf(23));
        set.add(Integer.valueOf(56));
        set.add(Integer.valueOf(98));

        System.out.println(set);
    }
}

/**
 * test
 */
class Integer {
    private int value;

    public Integer(int value) {
        this.value = value;
    }

    public int hashCode() {
        return value;
    }
}
