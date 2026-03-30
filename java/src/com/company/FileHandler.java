package com.company;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FileHandler {

    public static List<String> getFileData(String fileName) {
        try (Stream<String> result = Files.lines(Paths.get(fileName))) {
            return result.collect(Collectors.toList());
        } catch (IOException e) {
            throw new IllegalArgumentException(String.format("Cannot read input file %s", fileName));
        }
    }
}
