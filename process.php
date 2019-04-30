<?php
	/* Grab Document Title from Google Analytics data */
	
	$title = null;
	if (isset($_GET['dt'])) $title = $_GET['dt'];
	
	/* Write it to a file */
	
	$file = fopen('output.txt', 'w');
	fputs($file, $title);
	fclose($file);
	
	/* Send a 1 pixel gif (42 bytes) as a response */
	
	header('Content-Type: image/gif');
	readfile('pixel.gif');
?>