<?php

declare(strict_types=1);

final class PageRenderer {
    static function render(): string
    {
        return <<<EOQ
        <html lang="en">
            <head>
                <title>Livesport talk site</title>
            </head>
            <body>
                <h1>My App</h1>
                
                <p>My App is running!</p>
            </body>
        </html>
        EOQ;
    }
}