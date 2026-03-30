package com.company.domains;

public class Game {
    private final Hand handA;
    private final Hand handB;
    private final Board board;

    private Game(Hand handA, Hand handB, Board board) {
        this.handA = handA;
        this.handB = handB;
        this.board = board;
    }

    public static Game deserialize(String line) {
        String[] split = line.split(" ");
        if (split.length != 3) {
            throw new IllegalArgumentException(String.format("Invalid hand structure %s", line));
        }
        return new Game(Hand.deserialize(split[0]), Hand.deserialize(split[1]), Board.deserialize(split[2]));
    }

    @Override
    public String toString() {
        return String.format("%s %s %s", handA, handB, board);
    }
}
