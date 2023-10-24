<?php

declare(strict_types=1);

require_once __DIR__ . '/StatType.php';

final class StatsApi
{
    private array $statsDefinition = [
        [
            "id" => 432,
            "name" => "Expected Goals (xG)",
            "type" => StatType::FLOAT,
            "range" => 2,
        ],
        [
            "id" => 12,
            "name" => "Ball Possession",
            "type" => StatType::PERCENTAGE,
            "range" => 100,
        ],
        [
            "id" => 34,
            "name" => "Goal Attempts",
            "type" => StatType::COUNT,
            "range" => 10,
        ],
        [
            "id" => 13,
            "name" => "Shots on Goal",
            "type" => StatType::COUNT,
            "range" => 8,
        ],
        [
            "id" => 14,
            "name" => "Shots off Goal",
            "type" => StatType::COUNT,
            "range" => 8,
        ],
        [
            "id" => 158,
            "name" => "Blocked Shots",
            "type" => StatType::COUNT,
            "range" => 10,
        ],
        [
            "id" => 15,
            "name" => "Free Kicks",
            "type" => StatType::COUNT,
            "range" => 20,
        ],
        [
            "id" => 16,
            "name" => "Corner Kicks",
            "type" => StatType::COUNT,
            "range" => 10,
        ],
        [
            "id" => 17,
            "name" => "Offsides",
            "type" => StatType::COUNT,
            "range" => 8,
        ],
        [
            "id" => 19,
            "name" => "Goalkeeper Saves",
            "type" => StatType::COUNT,
            "range" => 5,
        ],
        [
            "id" => 21,
            "name" => "Fouls",
            "type" => StatType::COUNT,
            "range" => 20,
        ],
        [
            "id" => 23,
            "name" => "Yellow Cards",
            "type" => StatType::COUNT,
            "range" => 4,
        ],
        [
            "id" => 304,
            "name" => "Total Passes",
            "type" => StatType::COUNT,
            "range" => 500,
        ],
        [
            "id" => 342,
            "name" => "Completed Passes",
            "type" => StatType::COUNT,
            "range" => 450,
        ],
        [
            "id" => 189,
            "name" => "Tackles",
            "type" => StatType::COUNT,
            "range" => 20,
        ],
        [
            "id" => 372,
            "name" => "Attacks",
            "type" => StatType::COUNT,
            "range" => 130,
        ],
        [
            "id" => 373,
            "name" => "Dangerous Attacks",
            "type" => StatType::COUNT,
            "range" => 50,
        ],
    ];

    function loadStats(): array
    {
        $stats = [];

        foreach ($this->statsDefinition as $stat) {
            $commons = [
                "id" => $stat["id"],
                "name" => $stat["name"],
            ];

            switch ($stat['type']) {
                case StatType::COUNT:
                    $stats[] = array_merge($commons, [
                        "homeValue" => strval(rand(0, $stat["range"])),
                        "awayValue" => strval(rand(0, $stat["range"])),
                    ]);
                    break;

                case StatType::FLOAT:
                    $stats[] = array_merge($commons, [
                        "homeValue" => strval(rand(0, $stat["range"] * 100) / 100),
                        "awayValue" => strval(rand(0, $stat["range"] * 100) / 100),
                    ]);
                    break;

                case StatType::PERCENTAGE:
                    $randomValue = rand(0, $stat["range"]);
                    $stats[] = array_merge($commons, [
                        "homeValue" => strval($randomValue),
                        "awayValue" => strval($stat["range"] - $randomValue),
                    ]);
            }
        }

        // simulate database lookup and heavy processing
        sleep(1);

        return $stats;
    }
}
