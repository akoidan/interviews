package com.company.domains;

import java.util.List;
import java.util.stream.Collectors;

public class Board {

    private final List<Card> cards;

    public Board(List<Card> cards) {
        this.cards = cards;
    }

    public List<Card> getCards() {
        return cards;
    }

    public static Board deserialize(String line) {
        Layout layout = Layout.deserialize(line, 5);
        if (!layout.isBoard()) {
            throw new IllegalArgumentException("Board layout has invalid name");
        }
        return new Board(layout.getCards());
    }

    @Override
    public String toString() {
        return String.format("%s:%s", "Board", cards.stream().map(Card::toString).collect(Collectors.joining("-")));
    }
}
