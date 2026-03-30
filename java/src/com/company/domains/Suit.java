package com.company.domains;

public enum Suit {

    DIAMOND('d'),
    CLUBS('c'),
    HEARTS('h'),
    SPADES('s');

    private final Character serialized;

    Suit(Character serialized) {
        this.serialized = serialized;
    }

    public static Suit deserialize(Character serialized) {
        for (Suit b : Suit.values()) {
            if (new Character(Character.toLowerCase(serialized)).equals(b.serialized)) {
                return b;
            }
        }
        throw new IllegalArgumentException(String.format("Invalid card suit %s", serialized));
    }

    @Override
    public String toString() {
        return String.valueOf(this.serialized);
    }
}
