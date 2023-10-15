<?php

declare(strict_types=1);

require_once __DIR__ . '/helpers/PageRenderer.php';

$URL_PARAM_1 = $_SERVER['REQUEST_URI'];

if ($URL_PARAM_1 == '/dist/index.js') {
    $file = file_get_contents('../dist/index.js');
    exit;
}

echo PageRenderer::render('<div id="root"></div>',["/dist/index.js"]);