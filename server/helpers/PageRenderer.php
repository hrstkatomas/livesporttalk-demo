<?php

declare(strict_types=1);

final class PageRenderer {
    /**
     * @param array<string> $scripts
     * @return string
     */
    static function render(array $scripts = []): string
    {
        $scriptTags = [];
        foreach ($scripts as $script) {
            $scriptTags[] = "<script defer src=\"{$script}\"></script>";
        }
        $impodedScriptTags = implode("\n", $scriptTags);

        return <<<EOQ
        <html lang="en">
            <head>
                <title>Livesport talk site</title>
                {$impodedScriptTags}
            </head>
            <body>
                <h1>My App</h1>
                <p>My App is running!</p>
            </body>
        </html>
        EOQ;
    }
}