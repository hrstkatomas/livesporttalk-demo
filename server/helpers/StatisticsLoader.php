<?php

declare(strict_types=1);

final class StatisticsLoader
{
    static function load(): array
    {
        $json = file_get_contents(__DIR__ . '/initialStatistics.json');
        return json_decode($json, true);
    }
}