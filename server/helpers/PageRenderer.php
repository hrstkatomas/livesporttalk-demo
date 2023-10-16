<?php

declare(strict_types=1);

final class PageRenderer
{
    /**
     * @param string $bodyContent
     * @param array<string> $scripts
     * @param array<string> $styles
     * @return string
     */
    static function render(string $bodyContent, array $scripts = [], array $styles = []): string
    {
        $scriptTags = [];
        foreach ($scripts as $script) {
            $scriptTags[] = "<script defer src=\"{$script}\"></script>";
        }
        $impodedScriptTags = implode("\n", $scriptTags);

        $styleTags = [];
        foreach ($styles as $style) {
            $styleTags[] = "<link type=\"text/css\" rel=\"stylesheet\" href=\"{$style}\" media=\"all\">";
        }
        $impodedStyleTags = implode("\n", $styleTags);


        return <<<EOQ
        <html lang="en">
            <head>
                <title>Livesport talk site</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {$impodedScriptTags}
                {$impodedStyleTags}
                <style>
                    body {
                        font-family: monospace;
                    }
                </style>
            </head>
            <body>
                <h1>Hello livesport talk people!</h1>
                {$bodyContent}
            </body>
        </html>
        EOQ;
    }
}