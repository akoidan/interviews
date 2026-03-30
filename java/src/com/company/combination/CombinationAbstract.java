package com.company.combination;

import com.company.domains.Board;
import com.company.domains.Card;
import com.company.domains.Hand;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public abstract class CombinationAbstract implements Combination{

    private Hand h;
    private Board b;

    public CombinationAbstract(Hand h, Board b) {
        this.h = h;
        this.b = b;
    }

    public List<Card> getAllCards() {
        List<Card> result = new ArrayList<>(h.getCards());
        result.addAll(b.getCards());
        return result;
    }

    public abstract Set<List<Card>> getPossibleCombinations();
}
