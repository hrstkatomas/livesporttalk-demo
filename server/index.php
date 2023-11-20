<?php

declare(strict_types=1);

use Symfony\Component\Process\Process;

require __DIR__ . '/vendor/autoload.php';

require_once __DIR__ . '/helpers/PageRenderer.php';
require_once __DIR__ . '/helpers/StatsApi.php';

$api = new StatsApi();
$stats = $api->loadStats();

if ($_SERVER['REQUEST_URI'] == "/api/stats") {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($stats);
    exit;
}

$prop = json_encode(["stats" => $stats]);

// node
$process = Process::fromShellCommandline(command: "node " . __DIR__ . "/dist/server.js", input: $prop);
$process->run();
$html = <<<HTML
    {$process->getOutput()}
    <script>
        window.props = {$prop};
    </script>
HTML;


echo PageRenderer::render($html, ["/dist/index.js"], ["/dist/index.css"]);
