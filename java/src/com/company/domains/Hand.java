package com.company.domains;

import java.util.List;
import java.util.stream.Collectors;

public class Hand {

    private final String name;

    private final List<Card> cards;

    public Hand(String name, List<Card> cards) {
        this.name = name;
        this.cards = cards;
    }

    public List<Card> getCards() {
        return cards;
    }

    public static Hand deserialize(String line) {
        Layout layout = Layout.deserialize(line, 4);
        if (layout.isBoard()) {
            throw new IllegalArgumentException("Player has invalid name");
        }
        return new Hand(layout.getName(), layout.getCards());
    }

    @Override
    public String toString() {
        return String.format("%s:%s", name, cards.stream().map(Card::toString).collect(Collectors.joining("-")));
    }
}
