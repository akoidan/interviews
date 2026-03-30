package test;

public class TimeRewards {
    static TimeRewards getYamlHandler() {
        return null;
    }

    TimeRewards getMessage(String mes) {
        return null;
    }


    TimeRewards replace(String mes, TimeRewards s) {
        return null;
    }

    TimeRewards replace(String mes, String s) {
        return null;
    }

    TimeRewards getPrefix() {
        return null;
    }

    public static void main(String[] args) {
        messagePlayer("", null);
    }
    @SuppressWarnings("all")
    static void messagePlayer(String d2, TimeRewards t) {
        String player = "";
        messagePlayer(player, TimeRewards.getYamlHandler().getMessage("invalid-arguements")
                .replace("{prefix}", TimeRewards.getYamlHandler().getPrefix())
                .replace("{args}", "/tr clain <reward-name>")
        );
    }
}
