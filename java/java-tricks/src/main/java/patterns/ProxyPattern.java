package patterns;

import java.util.Arrays;
import java.util.List;

public class ProxyPattern {

    public static void main(String[] args) {
        System.out.println("Creating new proxyStorageImageParser...");
        ProxyStorageImageParser proxyStorageImageParser = new ProxyStorageImageParser("This is some long text, that is hard to parse");
        System.out.println("Created new proxyStorageImageParser");
        System.out.println(proxyStorageImageParser.getWords());
    }

    interface ImageParser {
        List<String> getWords();
    }

    static class LocalStorageImageParser implements ImageParser {

        private List<String> words;

        public LocalStorageImageParser(String text) {
            System.out.println("LocalStorageImageParser()");
            String[] split = text.split(" ");
            words = Arrays.asList(split);
        }

        public List<String> getWords() {
            System.out.println("getWords()");
            return words;
        }
    }

    static class ProxyStorageImageParser implements ImageParser {

        LocalStorageImageParser lsip;

        String text;


        public ProxyStorageImageParser(String text) {
            this.text = text;
        }

        @Override
        public List<String> getWords() {
            if (lsip == null) {
                lsip = new LocalStorageImageParser(text);
            }
            return lsip.getWords();
        }
    }
}
