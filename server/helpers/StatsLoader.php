<?php

declare(strict_types=1);

final class StatsLoader
{
    static function load(): array
    {
        $json = file_get_contents(__DIR__ . '/initialStats.json');
        return json_decode($json, true);
    }
}