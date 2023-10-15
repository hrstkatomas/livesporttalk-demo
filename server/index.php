<?php

declare(strict_types=1);

require_once __DIR__ . '/helpers/PageRenderer.php';

$URL_PARAM_1 = $_SERVER['REQUEST_URI'];

echo PageRenderer::render();
