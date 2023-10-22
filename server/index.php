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

//echo PageRenderer::render('<div id="root"></div>',["/dist/index.js"], ["/dist/index.css"]);

$props = json_encode(["stats" => $stats]);

$path = __DIR__ . '/dist/serverRenderer.js';
$process = Process::fromShellCommandline(command: "node {$path}", input: $props);
$process->run();

if (!$process->isSuccessful()) {
    echo $process->getExitCode();
    echo $process->getErrorOutput();
    exit;
}

$html = <<<EOQ
    {$process->getOutput()}
    <script type="text/javascript">
        var props = {$props};
    </script>
EOQ;
echo PageRenderer::render($html, ["/dist/clientHydrater.js"], ["/dist/index.css"]);