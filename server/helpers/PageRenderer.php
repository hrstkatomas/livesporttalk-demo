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
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {$impodedScriptTags}
                <style>
                    body {
                        font-family: monospace;
                    }
                </style>
            </head>
            <body>
                <h1>Hello livesport talk people!</h1>
                <div id="root"></div>
            </body>
        </html>
        EOQ;
    }
}