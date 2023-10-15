<?php

declare(strict_types=1);

require_once __DIR__ . '/helpers/PageRenderer.php';

$URL_PARAM_1 = $_SERVER['REQUEST_URI'];

if ($URL_PARAM_1 == '/dist/index.js') {
    $file = file_get_contents('../dist/index.js');
    exit;
}

echo PageRenderer::render(["/dist/index.js"]);



//// TODO: remove dd functions
//function dd2($x)
//{
//    // phpcs:ignore
//    d2($x, true);
//    die;
//}
//function d2($x, $from_dd = false)
//{
//    echo '<pre>';
//    echo "\n====================================================================\n";
//    $a = debug_backtrace();
//    $a = $a[$from_dd ? 1 : 0];
//    echo $a['file'] . ' : ' . $a['line'];
//    echo "\n--------------------------------------------------------------------\n";
//    print_r($x);
//    echo "\n\n";
//    echo '</pre>';
//}