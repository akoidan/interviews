package com.company.combination;

import com.company.domains.Board;
import com.company.domains.Card;
import com.company.domains.Hand;

import java.util.List;
import java.util.Set;

public class Quads  extends CombinationAbstract {
    public Quads(Hand h, Board b) {
        super(h, b);
    }

    @Override
    public Set<List<Card>> getPossibleCombinations() {
        return null;
    }

}
