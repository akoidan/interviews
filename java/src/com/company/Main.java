package com.company;

import com.company.domains.Game;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Main {

    public static void main(String[] args) {
        List<String> fileData = FileHandler.getFileData(args[0]);
        List<Game> games = fileData.stream().map(Game::deserialize).collect(Collectors.toList());
        IntStream.rangeClosed(1, 8)
                .forEach(System.out::println);
        games.forEach(System.out::println);
    }
}
