package com.company.domains;

import java.util.Comparator;

public enum CombinationName implements Comparator<CombinationName> {
    STRAIGHT_FLUSH(9),
    QUADS(8),
    FULL_HOUSE(7),
    FLUSH(6),
    STRAIGHT(5),
    SET(4),
    TWO_PAIRS(3),
    PAIR(2),
    KICKER(1);

    private final Integer importance;

    CombinationName(Integer importance) {
        this.importance = importance;
    }

    @Override
    public int compare(CombinationName o1, CombinationName o2) {
        return o1.importance - o2.importance;
    }
}
