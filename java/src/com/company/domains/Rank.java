package com.company.domains;

public enum Rank {

    ACE('A', 14),
    KING('K', 13),
    QUEEN('Q', 12),
    JACK('J', 11),
    TEN('T', 10),
    NINE('9', 9),
    EIGHT('8', 8 ),
    SEVEN('7', 7),
    SIX('6', 6),
    FIVE('5', 5),
    FOUR('4', 4),
    THREE('3', 3),
    TWO('2', 2);

    private final Character serialized;
    private final Integer importance;

    Rank(Character serialized, Integer importance) {
        this.serialized = serialized;
        this.importance = importance;
    }

    public Integer getImportance() {
        return importance;
    }

    public static Rank deserialize(Character serialized) {
        for (Rank b : Rank.values()) {
            if (serialized.equals(b.serialized)) {
                return b;
            }
        }
        throw new IllegalArgumentException(String.format("Invalid card rank %s", serialized));
    }

    @Override
    public String toString() {
        return String.valueOf(this.serialized);
    }
}
