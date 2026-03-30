package com.company.combination;

import com.company.domains.Board;
import com.company.domains.Card;
import com.company.domains.Hand;

import java.util.*;

public class Straight extends CombinationAbstract {
    public Straight(Hand h, Board b) {
        super(h, b);
    }

    @Override
    public Set<List<Card>> getPossibleCombinations() {
        List<Card> allCards = this.getAllCards();
        allCards.sort(Comparator.comparing(Card::getRank));
        Integer inRow = 0;
        List<Set<Card>> cardsInRow = new ArrayList<>(); //index access
        Set<List<Card>> readyCombinations = new HashSet<>();

        for (Card c: allCards) {
            if (cardsInRow.isEmpty()) {
                HashSet<Card> possibleMatch = new HashSet<>();
                possibleMatch.add(c);
                cardsInRow.add(possibleMatch);
                continue;
            }
            // e.g. 7 and 8 = 1, 8 and jack = 3
            // remember array is sorted , so new card would be always higher than previous
            Set<Card> prevCardsSet = cardsInRow.get(cardsInRow.size() - 1);
            Integer rankDiff = c.getRank().getImportance() - prevCardsSet.iterator().next().getRank().getImportance();
            if (rankDiff == 0) {
                prevCardsSet.add(c);
                continue;
            } else if (rankDiff == 1) {
                HashSet<Card> possibleMatch = new HashSet<>();
                possibleMatch.add(c);
                cardsInRow.add(possibleMatch);
            } else { // > 2
                cardsInRow = new ArrayList<>();
            }
            if (cardsInRow.size() == 5) {
                getCombinations(cardsInRow);
            }


        }
        return null;
    }

    private void getCombinations(List<Set<Card>> cardsInRow) {
        for (Set<Card> ic: cardsInRow) {

        }
    }
}
