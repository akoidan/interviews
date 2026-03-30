package com.company.domains;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Layout {

    private final String name;

    private final List<Card> cards;

    private Layout(String name, List<Card> cards) {
        this.name = name;
        this.cards = cards;
    }

    public boolean isBoard() {
        return name.equals("Board");
    }

    public String getName() {
        return name;
    }

    public List<Card> getCards() {
        return cards;
    }

    public static Layout deserialize(String line, Integer cardInHands) {
        String[] split = line.split(":");
        if (split.length != 2) {
            throw new IllegalArgumentException(String.format("Invalid hand structure %s", line));
        }
        String handName = split[0];
        String[] cardNames = split[1].split("-");
        if (cardNames.length != cardInHands) {
            throw new IllegalArgumentException(String.format("Hand %s has %d cards instead of %d", handName, cardNames.length, cardInHands));
        }
        List<Card> cards = Arrays
                .stream(cardNames)
                .map(Card::deserialize)
                .collect(Collectors.toList());
        return new Layout(handName, cards);
    }
}
