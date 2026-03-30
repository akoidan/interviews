package com.company.domains;

public class Card {
    private final Suit suit;
    private final Rank rank;

    private Card(Suit suit, Rank rank) {
        this.suit = suit;
        this.rank = rank;
    }

    public Suit getSuit() {
        return suit;
    }

    public Rank getRank() {
        return rank;
    }

    public static Card deserialize(String serialized) {
        if (serialized.length() != 2) {
            throw new IllegalArgumentException(String.format("Invalid card definition %s", serialized));
        }
        Rank rank = Rank.deserialize(serialized.charAt(0));
        Suit suit = Suit.deserialize(serialized.charAt(1));
        return new Card(suit, rank);
    }

    @Override
    public String toString() {
        return String.format("%s%s", rank, suit);
    }
}
